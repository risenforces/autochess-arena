import React from "react"
import { LogoBlock } from "./Block"
import { LogoImage } from "./Image"
import { LogoText } from "./Text"
import Link from "next/link"

export const Logo = () => (
  <Link href="/" passHref>
    <LogoBlock>
      <LogoImage src="/static/logo.png" />
      <LogoText>Arena</LogoText>
    </LogoBlock>
  </Link>
)
