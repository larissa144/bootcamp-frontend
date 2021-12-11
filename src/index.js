import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login';
import Cadastro from './components/cadastro/cadastro'
import Ongs from './components/ongs/Ongs'
import CriarNovaOng from './components/ong/criarNovaOng'
import Secured from './pages/secured'
import { isAuthenticated } from './utils/authenticate'

function App() {
    const [isAuth, setIsAuth ] = useState(isAuthenticated());
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/secured" element={ <Secured setIsAuth={setIsAuth} /> }/>
            <Route path="/feed" element={ isAuth ? <Ongs/> : <p>Not found</p> }/>
            <Route path="/ongs" element={ isAuth ? <Ongs/> : <p>Not found</p> }/>
            <Route path="/criarNovaOng" element={ isAuth ? <CriarNovaOng/> : <p>Not found</p> }/>
            <Route path="/cadastro" element={ !isAuth ? <Cadastro/> : <p>Not found</p> }/>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
