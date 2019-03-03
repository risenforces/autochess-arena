import { combineReducers } from "redux"

import { sessionReducer as session } from "./session"

export const reducers = combineReducers({ session })
