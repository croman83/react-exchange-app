import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

import {ExchangeInput} from "../ExchangeInput";
import {theme} from "../../styled";
import {ThemeProvider} from "styled-components";

let container: any = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('', () => {
    it("renders with one currency", () => {
        act(() => {
            render(
                <ThemeProvider theme={theme}>
                    <ExchangeInput sign={'$'}
                                   error={false}
                                   currencies={['USD']}
                                   currency={'USD'}
                                   amount={0}
                                   balance={0}
                                   onCurrencyChange={() => {
                                   }}
                                   onAmountChange={() => {
                                   }}/>
                </ThemeProvider>, container);
        });
        expect(container.textContent).toBe("USDBalance: 0 $");
        expect(container.querySelector('select').value).toBe("USD");
        expect(container.querySelector('input').value).toBe("0");
        expect(container.querySelector('.balance').textContent).toBe("Balance: 0 $");
    });

    it('renders with two currencies', () => {
        act(() => {
            render(
                <ThemeProvider theme={theme}>
                    <ExchangeInput sign={'$'}
                                   error={false}
                                   currencies={['USD', 'EUR']}
                                   currency={'USD'}
                                   amount={30}
                                   balance={10}
                                   onCurrencyChange={() => {
                                   }}
                                   onAmountChange={() => {
                                   }}/>
                </ThemeProvider>, container);
        });
        expect(container.textContent).toBe("USDEURBalance: 10 $");
        expect(container.querySelector('select').value).toBe("USD");
        expect(container.querySelector('select').options[1].textContent).toBe('EUR');
        expect(container.querySelector('input').value).toBe("30");
        expect(container.querySelector('.balance').textContent).toBe("Balance: 10 $");
    })

    it('renders with error', () => {
        act(() => {
            render(
                <ThemeProvider theme={theme}>
                    <ExchangeInput sign={'$'}
                                   error={true}
                                   currencies={['USD']}
                                   currency={'USD'}
                                   amount={20}
                                   balance={10}
                                   className={'test'}
                                   onCurrencyChange={() => {
                                   }}
                                   onAmountChange={() => {
                                   }}/>
                </ThemeProvider>, container);
        });
        expect(container.querySelector('.test').classList.contains('error')).toBe(true);
        expect(container.textContent).toBe("USDBalance eхcееded!");
        expect(container.querySelector('select').value).toBe("USD");
        expect(container.querySelector('input').value).toBe("20");
        expect(container.querySelector('.balance').textContent).toBe("Balance eхcееded!");
    })
})
