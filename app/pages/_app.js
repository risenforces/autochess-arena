import React from "react"
import App, { Container } from "next/app"
import { createGlobalStyle } from "styled-components"
import withRedux from "next-redux-wrapper"
import { Provider } from "react-redux"
import { makeStore } from "../store"
import { sessionActions } from "../store/reducers/session"

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    background-color: #79FFE1;
    color: #000;
  }
`

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    if (ctx.req && ctx.req.user) {
      ctx.store.dispatch(sessionActions.setUser(ctx.req.user))
    }

    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <GlobalStyles />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(CustomApp)
