import React from "react"
import { LogoBlock } from "./Block"
import { LogoImage } from "./Image"
import { LogoText } from "./Text"
import Router from "next/router"

export const Logo = () => (
  <LogoBlock onClick={() => Router.push("/")}>
    <LogoImage src="/static/logo.png" />
    <LogoText>ARENA</LogoText>
  </LogoBlock>
)
