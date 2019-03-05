import { createSelector } from "reselect"

const sessionSelector = state => state.session

export const authorizationSelector = createSelector(
  sessionSelector,
  session => session.isAuthorized
)

export const userSelector = createSelector(
  sessionSelector,
  session => session.user
)
