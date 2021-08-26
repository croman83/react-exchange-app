import { SET_ACCOUNT, SET_AMOUNT, SET_ACTIVE } from './actionTypes'
import { Account, AccountActionTypes, CurrencyType, SystemState } from './types'

const initialState: SystemState = {
  accounts: undefined,
  activeAccount: undefined
}

export default (state: SystemState = initialState, action: AccountActionTypes) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return { ...state, accounts: action.payload }
    case SET_ACTIVE:
      return { ...state, activeAccount: action.payload }
    case SET_AMOUNT: {
      const accounts: Record<CurrencyType, Account> = { ...state.accounts } as Record<CurrencyType, Account>

      action.payload?.forEach(pl => {
        accounts[pl.currency].amount = pl.amount || 0
      })

      return { ...state, accounts }
    }
    default:
      return state
  }
}
