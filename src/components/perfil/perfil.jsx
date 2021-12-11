import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../layouts/header'
import { Main, PerfilContent, PerfilSocialMedias, Divisor } from './styled'


function Perfil({ keycloak }) {
  const [categories, setCategories] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    console.log({ page })
  }, [page]);

  useEffect(async () => {
    if (keycloak) {
      const result = await axios.get("http://localhost:8080/ongs", {
        headers: {
          Authorization: "Bearer " + keycloak.token
        }
      })
      console.log({ result })
    }
  }, [keycloak]);

  return (
    <>
      <Header categories={categories} setCategories={setCategories} searchName={searchName} setSearchName={setSearchName} />
      <Main>
        <PerfilContent>COMPONENTE DE PERFIL</PerfilContent>
        <Divisor></Divisor>
        <PerfilSocialMedias>COMPONENTE DE MÍDIAS SOCIAIS</PerfilSocialMedias>
      </Main>
    </>
  );
}

export default Perfil