import React from 'react'

import { ExchangeProps } from "../features/accounts/types";
import { StyledInput } from '../styled';

export const ExchangeInput: React.FC<ExchangeProps> = (props: ExchangeProps) => {
    const { className, currencies, balance, amount, onAmountChange, sign, onCurrencyChange, currency, error } = props
    const balanceHTML = error ? <div className='balance'>Balance eхcееded!</div> : <div className='balance'>Balance: {balance} {sign}</div>

    return (
        <StyledInput className={`${ error && 'error' } ${className || ''}`}>
            <select className='select' name="" id="" value={currency} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onCurrencyChange(event.target.value)}>
                {currencies.map(cur => <option value={cur} key={cur}>{cur}</option>)}
            </select>
            <input className='input' type="text" value={amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onAmountChange(e.target.value)}/>
            {balanceHTML}
        </StyledInput>
    );
}
