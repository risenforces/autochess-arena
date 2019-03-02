const axios = require("axios")
const RanksAPI = require("./RanksAPI")

const getCourier = async steam64id => {
  const courier = await axios({
    url: "http://autochess.ppbizon.com/courier/get/@" + steam64id,
    method: "get"
  }).then(res => res.data)

  if (courier.err !== 0) {
    let message

    switch (courier.err_msg) {
      case "not exist":
        message = "Player is not found"
        break
      default:
        message = "Unknown error"
    }

    return {
      status: "ERR",
      message
    }
  }

  const data = courier.user_info[steam64id]

  return {
    status: "OK",
    data: {
      rank: data.mmr_level,
      candies: data.candy
    }
  }
}

const getPlayersRankings = async steam64idArray => {
  const rankings = await axios({
    url:
      "http://autochess.ppbizon.com/ranking/get?player_ids=" +
      steam64idArray.join(","),
    method: "get",
    headers: {
      "User-Agent": "Valve/Steam HTTP Client 1.0 (570;Windows;tenfoot)"
    }
  }).then(res => res.data)

  const data = rankings.ranking_info

  const rankingsObj = {}
  for (let player of data) {
    rankingsObj[player.player] = {
      rank: {
        number: player.mmr_level,
        string: RanksAPI.getRankStringFromNumber(player.mmr_level)
      },
      matches: player.match,
      score: player.score
    }
  }

  const result = {}
  for (let steam64id of steam64idArray) {
    if (!rankingsObj[steam64id]) {
      result[steam64id] = {
        status: "ERR",
        message: "Player is not found"
      }
      continue
    }

    result[steam64id] = {
      status: "OK",
      data: rankingsObj[steam64id]
    }
  }

  return {
    status: "OK",
    data: result
  }
}

const getPlayerFullData = async steam64id => {
  const [courier, rankings] = await axios.all([
    getCourier(steam64id),
    getPlayersRankings([steam64id])
  ])

  if (courier.status !== "OK") {
    return {
      status: "ERR",
      message: courier.message
    }
  }

  const playerRanking = rankings.data[steam64id]

  if (playerRanking.status !== "OK") {
    return {
      status: "ERR",
      message: playerRanking.message
    }
  }

  const courierData = courier.data
  const rankingData = playerRanking.data

  return {
    status: "OK",
    data: {
      rank: rankingData.rank,
      matches: rankingData.matches,
      candies: courierData.candies
    }
  }
}

module.exports = {
  getCourier,
  getPlayersRankings,
  getPlayerFullData
}
