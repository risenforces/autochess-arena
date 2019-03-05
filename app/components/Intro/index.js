import React from "react"
import Link from "next/link"
import { Container } from "../Container"
import { IntroBlock } from "./Block"
import { IntroTitle } from "./Title"
import { IntroDescription } from "./Description"
import { IntroButtons } from "./Buttons"
import { IntroButton } from "./Button"
import { IntroSteamIcon } from "./SteamIcon"

export const Intro = () => (
  <Container>
    <IntroBlock>
      <IntroTitle>
        Dota Auto Chess <br />
        Matchmaking Platform
      </IntroTitle>
      <IntroDescription>
        <Link href="/" passHref>
          <a>AutoChess Arena</a>
        </Link>{" "}
        makes DAC matchmaking organization easy.
        <br />
        Don't spend time connecting the steam to discord.{" "}
        <b>Just login and play.</b>
      </IntroDescription>
      <IntroButtons>
        <IntroButton href="/login" external>
          <IntroSteamIcon /> Start with Steam
        </IntroButton>
      </IntroButtons>
    </IntroBlock>
  </Container>
)
