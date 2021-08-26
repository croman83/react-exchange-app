import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

import {ExchangeComponent} from "../ExchangeComponent";
import {theme} from "../../styled";
import {ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
import store from "../../store";

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
    it("renders", async () => {
        act(() => {
            render(
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <ExchangeComponent/>
                    </ThemeProvider>
                </Provider>, container);
        })
    });
})
