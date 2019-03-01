const axios = require("axios")
const RanksAPI = require("./RanksAPI")

const getCourier = async steam64id => {
  const courier = await axios({
    url: "http://autochess.ppbizon.com/courier/get/@" + steam64id,
    method: "get"
  }).then(res => res.data)

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

  const result = {}
  for (let player of data) {
    result[player.player] = {
      rank: {
        number: player.mmr_level,
        string: RanksAPI.getRankStringFromNumber(player.mmr_level)
      },
      matches: player.match,
      score: player.score
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

  const courierData = courier.data
  const rankingData = rankings.data[steam64id]

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
