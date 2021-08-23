import { SET_USER } from './actionTypes'
import { UserActionTypes } from './types'

const initialState = {
  name: 'Roman'
}

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, name: action.payload }
    default:
      return state
  }
}
