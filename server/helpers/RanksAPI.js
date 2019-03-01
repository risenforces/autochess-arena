const ranksMap = require("../constants/ranksMap")

const reversedRanksMap = {}
for (let num in ranksMap) {
  reversedRanksMap[ranksMap[num]] = num
}

const getRankStringFromNumber = number => {
  if (!ranksMap[number]) return null
  return ranksMap[number]
}

const getRankNumberFromString = string => {
  if (!reversedRanksMap[string]) return null
  return reversedRanksMap[string]
}

module.exports = {
  getRankStringFromNumber,
  getRankNumberFromString
}
