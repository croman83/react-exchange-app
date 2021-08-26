import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components"

import { ExchangeComponent, NotFoundComponent } from "./pages"
import { Navbar } from "./components/Navbar";
import { Logobar } from "./components/Logobar";
import { MainContainer, theme } from "./styled";
import { getUser } from "./api/accountRepository";
import { SET_ACCOUNT, SET_ACTIVE } from "./features/accounts/actionTypes";
import { SET_USER } from "./features/user/actionTypes";

const App: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getUser().then(res => {
            dispatch({ type: SET_USER, payload: res?.user?.name })
            dispatch({ type: SET_ACCOUNT, payload: res?.accounts })
            dispatch({ type: SET_ACTIVE, payload: res?.active })
        })
    })
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MainContainer>
                    <Logobar/>
                    <Switch>
                        <Route path="/" component={NotFoundComponent} exact/>
                        <Route path="/history" component={NotFoundComponent}/>
                        <Route path="/exchange" component={ExchangeComponent}/>
                        <Route path="/settings" component={NotFoundComponent}/>
                    </Switch>
                </MainContainer>
                <Navbar/>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
