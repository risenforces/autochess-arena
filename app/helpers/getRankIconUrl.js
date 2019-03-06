import Pawn from "../assets/chess/pawn.png"
import Knight from "../assets/chess/knight.png"
import Bishop from "../assets/chess/bishop.png"
import Rook from "../assets/chess/rook.png"
import King from "../assets/chess/king.png"
import Queen from "../assets/chess/queen.png"
import Error from "../assets/chess/error.png"

const iconsFiles = {
  Pawn,
  Knight,
  Bishop,
  Rook,
  King,
  Queen,
  Error
}

export const getRankIconUrl = rankString => {
  if (rankString.indexOf("-") !== -1) {
    const rankBase = rankString.split("-")[0]
    return iconsFiles[rankBase]
  }
  return iconsFiles[rankString]
}
