import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../layouts/header'
import PerfilOng from './perfilOng';
import MidiaSocial from './midia';
import i1 from '../../assets/img/ong1.png';
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
        <PerfilContent>

          <PerfilOng
            name={"Ong caminho das Crianças"}
            img={i1}
            tel={"(11) 99999-9999"}
            email={"email@email.com"}
            address={"Rua das Crianças, 123"}
            category={"Crianças e Adolescentes"}
          />
          
        </PerfilContent>
        <Divisor></Divisor>

        <PerfilSocialMedias>

          <MidiaSocial
            img={i1}
            user={"@instagram"}
          />
          <MidiaSocial
            img={i1}
            user={"@instagram"}
          />
          <MidiaSocial
            img={i1}
            user={"@instagram"}
          />

        </PerfilSocialMedias>
      </Main>
    </>
  );
}

export default Perfil