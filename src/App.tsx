import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from "styled-components";

import { ExchangeComponent, NotFoundComponent } from "./pages";
import { Navbar } from "./components/Navbar";
import { Logobar } from "./components/Logobar";
import { MainContainer, theme } from "./styled";

const App: React.FC = () => {
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
