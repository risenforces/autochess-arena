import React from "react"
import { MiniProfileInfoRankBlock } from "./Block"
import { MiniProfileInfoRankIcon } from "./Icon"
import { MiniProfileInfoRankString } from "./String"
import { getRankIconUrl } from "../../../../../helpers/getRankIconUrl"

export const MiniProfileInfoRank = ({ rankString }) => (
  <MiniProfileInfoRankBlock>
    <MiniProfileInfoRankIcon
      src={getRankIconUrl(rankString)}
      draggable="false"
    />
    <MiniProfileInfoRankString>{rankString}</MiniProfileInfoRankString>
  </MiniProfileInfoRankBlock>
)
