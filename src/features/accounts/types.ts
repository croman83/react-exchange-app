import { SET_ACCOUNT, SET_AMOUNT, SET_ACTIVE } from "./actionTypes";

interface SetAccountAction {
  type: typeof SET_ACCOUNT,
  payload: Record<CurrencyType, Account>
}

interface SetAccountAmountAction {
  type: typeof SET_AMOUNT,
  payload: Array<{
    amount: number,
    currency: CurrencyType
  }>
}

interface SetAccountActiveAction {
  type: typeof SET_ACTIVE,
  payload: CurrencyType
}

export type CurrencyType = 'USD' | 'EUR' | 'GBP'

export type CurrencySymbolType = '$' | '€' | '£'

export interface Account {
  currency: CurrencyType,
  currencySymbol: CurrencySymbolType,
  amount: number,
  currencyIcon: string,
  id: number
}

export type AccountActionTypes = SetAccountAction | SetAccountAmountAction | SetAccountActiveAction

export interface SystemState {
  accounts: Record<CurrencyType, Account> | undefined,
  activeAccount: CurrencyType | undefined
}

export interface ExchangeProps {
  currencies: CurrencyType[],
  currency: CurrencyType,
  onCurrencyChange: (currency: any) => void,
  amount: number,
  balance: number,
  sign: string,
  onAmountChange: (amount: any) => void,
  error?: boolean,
  className?: string
}

export interface RateResponse {
  date: string,
  historical: boolean,
  info: {
    rate: number
  },
  motd: {
    msg: string,
    url: string
  },
  query: {
    from: CurrencyType,
    to: CurrencyType,
    amount: number
  },
  result: number,
  success: boolean
}
