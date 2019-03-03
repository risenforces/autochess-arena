import React from "react"
import Head from "next/head"
import { Header } from "../components/Header"

class Index extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>AutoChess Arena</title>
        </Head>
        <Header />
      </>
    )
  }
}

export default Index
