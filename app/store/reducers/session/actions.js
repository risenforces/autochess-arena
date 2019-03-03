import * as types from "./types"

export const setUser = user => ({
  type: types.SET_USER,
  payload: {
    user
  }
})

export const reset = () => ({
  type: types.RESET
})
