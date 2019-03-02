const iconsDir = "/static/chess/"

const iconsFiles = {
  Pawn: "pawn.png",
  Knight: "knight.png",
  Bishop: "bishop.png",
  Rook: "rook.png",
  King: "king.png",
  Queen: "queen.png",
  Error: "error.png"
}

export const getRankIconUrl = rankString => {
  if (rankString.indexOf("-") !== -1) {
    const rankBase = rankString.split("-")[0]
    return iconsDir + iconsFiles[rankBase]
  }
  return iconsDir + iconsFiles[rankString]
}
