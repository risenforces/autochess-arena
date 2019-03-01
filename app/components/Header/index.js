import React from "react"
import { ContentBlock } from "../ContentBlock"
import { Line } from "../Line"
import { HeaderBlock } from "./Block"
import { HeaderLeft } from "./Left"
import { HeaderRight } from "./Right"
import { MiniProfile } from "./MiniProfile"
import { Logo } from "./Logo"

export const Header = ({ user }) => (
  <>
    <ContentBlock>
      <HeaderBlock>
        <HeaderLeft>
          <Logo />
        </HeaderLeft>
        <HeaderRight>
          <MiniProfile user={user} />
        </HeaderRight>
      </HeaderBlock>
    </ContentBlock>
    <Line />
  </>
)
