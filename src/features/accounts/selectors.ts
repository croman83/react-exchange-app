import { RootStateOrAny } from "react-redux";

export const getActiveAccount = (state: RootStateOrAny) => {
    return state.accounts?.activeAccount && state.accounts?.accounts?.[state.accounts?.activeAccount]
}

export const getAccounts = (state: RootStateOrAny) => state.accounts.accounts
