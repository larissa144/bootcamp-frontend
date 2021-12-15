import React, { useState } from 'react';
import Secured from '../../pages/secured';
import Ongs from '../ongs/Ongs';
import CriarNovaOng from '../ong/criarNovaOng';
import Cadastro from '../cadastro/cadastro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../../pages/landing-page';
import Perfil from "../perfil/perfil"
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from '../../utils/keycloak'
import PrivateRoute from '../layouts/private-route';

function App() {
    return (
        <ReactKeycloakProvider authClient={keycloak} initOptions={{checkLoginIframe: false}} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />}/>
                    <Route path="/login" element={<Secured />}/>
                    <Route path="/feed" element={<PrivateRoute children={<Ongs/>} />}/>
                    <Route path="/ongs" element={<PrivateRoute children={<Ongs/>} />}/>
                    <Route path="/ongs/:id" element={<PrivateRoute children={<Perfil/>} />}/>
                    <Route path="/criarNovaOng" element={<PrivateRoute children={<CriarNovaOng/>} />}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                </Routes>
            </BrowserRouter>
        </ReactKeycloakProvider>
    )
}

export default App;
