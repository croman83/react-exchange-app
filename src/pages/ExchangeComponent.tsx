import React, { Fragment, useMemo, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { StyledConvertButton, StyledExchangeContainer, StyledSwitchButton, StyledTabSwitcher } from '../styled'
import { ExchangeInput } from "../components/ExchangeInput";
import { selectors } from "../features/accounts";
import { CurrencyType } from "../features/accounts/types";
import { SET_ACTIVE, SET_AMOUNT } from "../features/accounts/actionTypes";
import { TransferIcon } from "../icons";
import { useInterval } from "../hooks";
import { getRates } from "../api/rateRepository";
import { numberToFixed } from "../utils";

export const ExchangeComponent: React.FC = () => {
    const dispatch = useDispatch()

    const [state, setState] = useState({
        activeTab: false,
        activeAmount: 0,
        convertedAmount: 0,
        secondCurrency: 'EUR',
        rate: 1
    })

    const accounts = useSelector(selectors.getAccounts)
    const activeAccount = useSelector(selectors.getActiveAccount, shallowEqual)

    const accountCurrencies = useMemo(() => Object.keys(accounts || {}) as CurrencyType[], [accounts])
    const secondAccount = useMemo(() => accounts?.[state.secondCurrency], [accounts, state.secondCurrency])

    const FETCH_RATE_DELAY = 1000000

    useInterval(async (): Promise<void> => {
        if (!activeAccount?.currency || !state.secondCurrency) {
            return
        }

        const rate = await getRates(`https://api.exchangerate.host/convert?from=${activeAccount.currency}&to=${state.secondCurrency}`)

        setState({ ...state, rate, convertedAmount: numberToFixed(state.activeAmount * rate) })
    }, FETCH_RATE_DELAY, [activeAccount, state.secondCurrency])

    const currencyHandle = (e: CurrencyType, isActive?: boolean): void => {
        if (isActive) {
            dispatch({ type: SET_ACTIVE, payload: e })
        } else {
            setState({ ...state, secondCurrency: e })
        }
    }

    const amountHandle = (amount: string, isActive: boolean): void => {
        const parsedAmount = numberToFixed(amount)

        if (isActive) {
            setState({
                ...state,
                activeAmount: parsedAmount,
                convertedAmount: numberToFixed(parsedAmount * state.rate)
            })
        } else {
            setState({
                ...state,
                activeAmount: numberToFixed(parsedAmount / state.rate),
                convertedAmount: parsedAmount
            })
        }

    }

    const switchAccount = (): void => {
        setState({
            ...state,
            secondCurrency: activeAccount.currency
        })

        dispatch({ type: SET_ACTIVE, payload: state.secondCurrency })
    }

    const convert = (): void => {
        if (activeAccount.currency !== state.secondCurrency && state.activeAmount) {
            dispatch({
                type: SET_AMOUNT, payload: [
                    {
                        currency: activeAccount.currency,
                        amount: numberToFixed(activeAccount.amount - state.activeAmount)
                    },
                    {
                        currency: state.secondCurrency,
                        amount: numberToFixed(accounts[state.secondCurrency].amount + state.convertedAmount)
                    }
                ]
            })
            setState({
                ...state,
                activeAmount: 0,
                convertedAmount: 0
            })
        }
    }

    return (
        <Fragment>
            <StyledTabSwitcher>
                <button type='button' className={!state.activeTab ? 'active' : ''}
                        onClick={() => setState({ ...state, activeTab: false })}>Exchange Currency
                </button>
                <button type='button' className={state.activeTab ? 'active' : ''}
                        onClick={() => setState({ ...state, activeTab: true })}>CurrencyRates
                </button>
            </StyledTabSwitcher>
            { !state.activeTab ?
                <div>
                    <StyledExchangeContainer>
                        <ExchangeInput sign={activeAccount?.currencySign}
                                       error={state.activeAmount > activeAccount?.amount}
                                       currencies={accountCurrencies}
                                       currency={activeAccount?.currency}
                                       amount={state.activeAmount}
                                       balance={activeAccount?.amount}
                                       onCurrencyChange={e => currencyHandle(e, true)}
                                       onAmountChange={e => amountHandle(e, true)}/>
                        <StyledSwitchButton onClick={switchAccount}>
                            <TransferIcon/>
                        </StyledSwitchButton>
                        <ExchangeInput sign={secondAccount?.currencySign}
                                       currencies={accountCurrencies}
                                       currency={state.secondCurrency as CurrencyType}
                                       amount={state.convertedAmount}
                                       balance={secondAccount?.amount}
                                       className='test'
                                       onCurrencyChange={e => currencyHandle(e)}
                                       onAmountChange={e => amountHandle(e, false)}/>
                    </StyledExchangeContainer>
                    <StyledConvertButton type='button' disabled={state.activeAmount > activeAccount?.amount} onClick={convert}>Convert
                    </StyledConvertButton>
                </div> : <div>
                rates
            </div> }
        </Fragment>
    )
}
