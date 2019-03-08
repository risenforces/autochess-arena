import React from "react"
import { LogoBlock } from "./Block"
import { LogoImage } from "./Image"
import logo from "../../../assets/logo.png"
import Link from "next/link"

export const Logo = () => (
  <Link href="/" passHref>
    <LogoBlock>
      <LogoImage src={logo} />
    </LogoBlock>
  </Link>
)
