import React from 'react';
import Secured from '../../pages/secured';
import Ongs from '../ongs/Ongs';
import CadastroOng from '../cadastro-ong/cadastro-ong';
import Cadastro from '../cadastro/cadastro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../../pages/landing-page';
import Perfil from "../perfil/perfil"
import keycloak from '../../utils/keycloak'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import PrivateRoute from '../layouts/private-route';

function App() {
    return (
        <ReactKeycloakProvider authClient={keycloak} initOptions={{ checkLoginIframe: false }} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Secured />} />
                    <Route path="/feed" element={<PrivateRoute children={<Ongs />} />} />
                    <Route path="/ongs" element={<PrivateRoute children={<Ongs />} />} />
                    <Route path="/ongs/:id" element={<PrivateRoute children={<Perfil />} />} />
                    <Route path="/ongs/cadastro" element={<PrivateRoute children={<CadastroOng />} />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
            </BrowserRouter>
        </ReactKeycloakProvider>
    )
}

export default App;
