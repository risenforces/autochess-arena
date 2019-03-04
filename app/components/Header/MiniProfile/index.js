import React from "react"
import { connect } from "react-redux"
import { sessionSelectors } from "../../../store/reducers/session"
import { MiniProfileBlock } from "./Block"
import { MiniProfileAvatar } from "./Avatar"
import { MiniProfileInfo } from "./Info"
import { MiniProfileInfoUsername } from "./Info/Username"
import { MiniProfileInfoRank } from "./Info/Rank"
import { MiniProfileLoginButton } from "./LoginButton"
import { MiniProfileMenu } from "./Menu"
import { MiniProfileAvatarContainer } from "./AvatarContainer"

class MiniProfile extends React.Component {
  state = {
    isMenuOpened: false
  }

  toggleMenu = () => this.setState({ isMenuOpened: !this.state.isMenuOpened })
  closeMenu = () => this.setState({ isMenuOpened: false })

  render() {
    const { isMenuOpened } = this.state
    const { user } = this.props

    if (!user)
      return (
        <MiniProfileLoginButton href="/login">Login</MiniProfileLoginButton>
      )

    return (
      <MiniProfileBlock>
        <MiniProfileInfo>
          <MiniProfileInfoUsername>
            {user.steam.profile_name}
          </MiniProfileInfoUsername>
          <MiniProfileInfoRank game={user.game} />
        </MiniProfileInfo>
        <MiniProfileAvatarContainer onBlur={this.closeMenu} tabIndex="0">
          <MiniProfileAvatar
            src={user.steam.avatar_url}
            draggable="false"
            onClick={this.toggleMenu}
          />
          <MiniProfileMenu isOpen={isMenuOpened} />
        </MiniProfileAvatarContainer>
      </MiniProfileBlock>
    )
  }
}

const mapStateToProps = state => ({
  user: sessionSelectors.userSelector(state)
})

export const ConnectedMiniProfile = connect(mapStateToProps)(MiniProfile)
