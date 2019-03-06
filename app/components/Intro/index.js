import React from "react"
import { Container } from "../common/Container"
import { IntroBlock } from "./Block"
import { IntroTitle } from "./Title"
import { IntroDescription } from "./Description"
import { IntroButtons } from "./Buttons"
import { IntroButton } from "./Button"
import { IntroSteamIcon } from "./SteamIcon"
import { Link } from "../common/Link"

export const Intro = () => (
  <Container>
    <IntroBlock>
      <IntroTitle>
        Dota Auto Chess <br />
        Matchmaking Platform
      </IntroTitle>
      <IntroDescription>
        <Link href="/">AutoChess Arena</Link> makes DAC matchmaking organization
        easy.
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
