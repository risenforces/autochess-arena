import React from "react"
import { LogoBlock } from "./Block"
import { LogoImage } from "./Image"
import { LogoText } from "./Text"

export const Logo = () => (
  <LogoBlock>
    <LogoImage src="/static/logo.png" />
    <LogoText>ARENA</LogoText>
  </LogoBlock>
)
