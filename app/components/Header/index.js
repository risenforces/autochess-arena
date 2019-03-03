import React from "react"
import { ContentBlock } from "../ContentBlock"
import { Line } from "../Line"
import { HeaderBlock } from "./Block"
import { HeaderLeft } from "./Left"
import { HeaderRight } from "./Right"
import { ConnectedMiniProfile } from "./MiniProfile"
import { Logo } from "./Logo"

export const Header = () => (
  <>
    <ContentBlock>
      <HeaderBlock>
        <HeaderLeft>
          <Logo />
        </HeaderLeft>
        <HeaderRight>
          <ConnectedMiniProfile />
        </HeaderRight>
      </HeaderBlock>
    </ContentBlock>
    <Line />
  </>
)
