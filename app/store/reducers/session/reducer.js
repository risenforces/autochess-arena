import * as types from "./types"

const initialState = {
  user: null
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.SET_USER:
      return {
        ...state,
        user: payload.user
      }

    case types.RESET:
      return initialState

    default:
      return state
  }
}
