import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useKeycloak } from '@react-keycloak/web'

import Header from '../layouts/header'
import PerfilOng from './perfilOng';
import MidiaSocial from './midia';
import i1 from '../../assets/img/ong1.png';
import { Main, PerfilContent, PerfilSocialMedias, Divisor } from './styled'
import { useParams } from 'react-router-dom';


function Perfil(props) {
  const { keycloak, initialized } = useKeycloak();
  const [ ongData, setOngData ] = useState({})
  let { id } = useParams();

    useEffect(async () => {
        if(initialized) {
            const result = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}`, {
                headers: {
                    Authorization: "Bearer " + keycloak.token
                }
            });
            console.log(result.data);
            setOngData(result.data)
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
            tel={ongData.contato ? ongData.contato.telefone : "Telefone da ONG"}
            email={ongData.contato ? ongData.contato.email : "Email da ONG"}
            address={ongData.contato ? ongData.contato.endereco : "Endereço da ONG"}
            category={ongData.categoria ? ongData.categoria.nome : ""}
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