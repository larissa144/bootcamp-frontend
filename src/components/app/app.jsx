import React, { useState } from 'react';
import Secured from '../../pages/secured';
import Ongs from '../ongs/Ongs';
import CriarNovaOng from '../ong/criarNovaOng';
import Cadastro from '../cadastro/cadastro';
import { isAuthenticated } from '../../utils/authenticate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../landing-page/landing-page';

function App() {
    const [isAuth, setIsAuth ] = useState(isAuthenticated());
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ !isAuth ? <LandingPage /> : <Secured setIsAuth={setIsAuth}/> }/>
                <Route path="/login" element={ <Secured setIsAuth={setIsAuth} /> }/>
                <Route path="/feed" element={ isAuth ? <Ongs/> : <p>Not found</p> }/>
                <Route path="/ongs" element={ isAuth ? <Ongs/> : <p>Not found</p> }/>
                <Route path="/criarNovaOng" element={ isAuth ? <CriarNovaOng/> : <p>Not found</p> }/>
                <Route path="/cadastro" element={ !isAuth ? <Cadastro/> : <p>Not found</p> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
