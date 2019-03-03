import { createSelector } from "reselect"

const sessionSelector = state => state.session

export const userSelector = createSelector(
  sessionSelector,
  session => session.user
) 
