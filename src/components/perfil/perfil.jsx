import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useKeycloak } from '@react-keycloak/web'

import Header from '../layouts/header'
import PerfilOng from './perfilOng';
import MidiaSocial from './midia';
import i1 from '../../assets/img/ong1.png';
import { Main, PerfilContent, PerfilSocialMedias, Divisor } from './styled'

function Perfil() {
  const ongID = "192c3ac0-0ea9-485f-8ecf-ed1a1330639b";
  const { keycloak, initialized } = useKeycloak();
  const [ongData, setOngData] = useState({})

  useEffect(async () => {
    if (initialized) {
      const result = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${ongID}`, {
        headers: {
          Authorization: "Bearer " + keycloak.token
        }
      });
      console.log(result.data);
      setOngData(result.data);
    }
  }, [initialized]);

  return (
    <>
      <Header />
      <Main>
        <PerfilContent>

          <PerfilOng
            name={ongData.nome ? ongData.nome : "Nome da ONG"}
            img={i1}
            tel={ongData.contato.telefone ? ongData.contato.telefone : "Telefone da ONG"}
            email={ongData.contato.email ? ongData.contato.email : "Email da ONG"}
            address={ongData.contato.endereco ? ongData.contato.endereco : "Endereço da ONG"}
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