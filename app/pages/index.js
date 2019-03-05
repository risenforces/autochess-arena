import React from "react"
import Head from "next/head"
import { Header } from "../components/Header"
import { Intro } from "../components/Intro"

class Index extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>AutoChess Arena</title>
        </Head>
        <Header />
        <Intro />
      </>
    )
  }
}

export default Index
