import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { getAuthData } from "../../utils/authenticate"

import Header from '../layouts/header'
import PerfilOng from './perfilOng';
import MidiaSocial from './midia';
import i1 from '../../assets/img/ong1.png';
import { Main, PerfilContent, PerfilSocialMedias, Divisor } from './styled'

function Perfil() {
  const [categories, setCategories] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [page, setPage] = useState(0);
  const ongID = "192c3ac0-0ea9-485f-8ecf-ed1a1330639b";

  useEffect(() => {
    console.log({ page })
  }, [page]);

  useEffect(async () => {
    const auth = getAuthData();
    console.log({ auth })
    const result = await axios.get("http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/", {
      headers: {
        Authorization: "Bearer " + auth.token
      },
      params: {
        ongID: ongID
      }
    });
  console.log({ result })
}, []);

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