import React from "react"
import { connect } from "react-redux"
import { HeaderMenuBlock } from "./Block"
import { HeaderMenuItem } from "./Item"
import { sessionSelectors } from "../../../store/reducers/session"

const HeaderMenu = ({ isAuthorized }) => (
  <HeaderMenuBlock>
    <HeaderMenuItem to="/play" condition={isAuthorized}>
      Find a game
    </HeaderMenuItem>
  </HeaderMenuBlock>
)

const mapStateToProps = state => ({
  isAuthorized: sessionSelectors.authorizationSelector(state)
})

export const ConnectedHeaderMenu = connect(mapStateToProps)(HeaderMenu)
