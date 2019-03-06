import React from "react"
import { Container } from "../common/Container"
import { Line } from "../common/Line"
import { HeaderBlock } from "./Block"
import { HeaderLeft } from "./Left"
import { HeaderRight } from "./Right"
import { ConnectedMiniProfile } from "./MiniProfile"
import { Logo } from "./Logo"

export const Header = () => (
  <>
    <Container>
      <HeaderBlock>
        <HeaderLeft>
          <Logo />
        </HeaderLeft>
        <HeaderRight>
          <ConnectedMiniProfile />
        </HeaderRight>
      </HeaderBlock>
    </Container>
    <Line />
  </>
)
