import React from "react"
import App, { Container } from "next/app"
import Head from "next/head"

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>AutoChess Arena</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <style jsx>{`
            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
                "Droid Sans", "Helvetica Neue", sans-serif;
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
            }
          `}</style>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
