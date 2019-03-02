import React from "react"
import { MiniProfileInfoRankBlock } from "./Block"
import { MiniProfileInfoRankIcon } from "./Icon"
import { MiniProfileInfoRankString } from "./String"
import { getRankIconUrl } from "../../../../../helpers/getRankIconUrl"

export const MiniProfileInfoRank = ({ game }) => {
  if (!game.exists)
    return (
      <MiniProfileInfoRankBlock>
        <MiniProfileInfoRankIcon
          src={getRankIconUrl("Error")}
          draggable="false"
        />
        <MiniProfileInfoRankString>Error</MiniProfileInfoRankString>
      </MiniProfileInfoRankBlock>
    )

  const rankString = game.rank.string

  return (
    <MiniProfileInfoRankBlock>
      <MiniProfileInfoRankIcon
        src={getRankIconUrl(rankString)}
        draggable="false"
      />
      <MiniProfileInfoRankString>{rankString}</MiniProfileInfoRankString>
    </MiniProfileInfoRankBlock>
  )
}
