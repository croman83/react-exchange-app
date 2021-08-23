import { SET_USER } from "./actionTypes";

interface SetUserAction {
  type: typeof SET_USER,
  payload: string
}
export type UserActionTypes = SetUserAction

export interface SystemState {
  user: {
    name: string
  }
}
