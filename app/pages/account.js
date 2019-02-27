import React from "react"

class Account extends React.Component {
  static getInitialProps({ query }) {
    return query
  }

  render() {
    const { user } = this.props

    return (
      <div>
        Logged in as{" "}
        <a href={user.steam.profile_url} target="_blank">
          {user.steam.profile_name}
        </a>
        !
      </div>
    )
  }
}

export default Account
