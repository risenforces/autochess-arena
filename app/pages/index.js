import React from "react"
import { Header } from "../components/Header"

class Index extends React.Component {
  static getInitialProps({ query }) {
    return query
  }

  render() {
    const { user } = this.props

    return <Header user={user} />
  }
}

export default Index
