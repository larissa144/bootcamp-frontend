import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login';
import Cadastro from './components/cadastro/cadastro'
import Ongs from './components/ongs/Ongs'
import CriarNovaOng from './components/ong/criarNovaOng'
import Secured from './pages/secured'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact={true} element={<Login/>}/>
      <Route path="/secured" element={<Secured/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/ongs" element={<Ongs/>}/>
      <Route path="/criarNovaOng" element={<CriarNovaOng/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
