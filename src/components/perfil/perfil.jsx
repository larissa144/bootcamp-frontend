import React, { useState, useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web'
import Header from '../layouts/header'
import PerfilOng from './perfilOng';
import MidiaSocial from './midia';
import { Main, PerfilContent, PerfilSocialMedias, Divisor } from './styled'
import defaultImage from '../../assets/img/ong1.png';
import { useParams } from 'react-router-dom';
import Footer from '../layouts/footer';
import axios from 'axios';


function Perfil(props) {
  const { keycloak, initialized } = useKeycloak();
  const [ongData, setOngData] = useState({});
  const [img, setImg] = useState(null);
  const [ redesSociais, setRedesSociasi ] = useState([]);

  let { id } = useParams();

  useEffect(async () => {
    if (initialized) {
      const result = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}`, {
        headers: {
          Authorization: "Bearer " + keycloak.token
        }
      });
      setOngData(result.data)
    }
  }, [initialized]);

  useEffect(async () => {
    if (initialized) {
      try {
        const result = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}/download-imagem`, {
          headers: {
            Authorization: "Bearer " + keycloak.token
          },
          responseType: 'arraybuffer'
        });
        setImg(`data:image/jpeg;base64,${Buffer.from(result.data, 'binary').toString('base64')}`)
      } catch (error) {
        setImg(defaultImage)
      }
    }
  }, [initialized])

  useEffect(async () => {
    if (initialized) {
      try {
        const result = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}/redes-sociais`, {
          headers: {
            Authorization: "Bearer " + keycloak.token
          },
          responseType: 'array'
        });
        console.log("redes_sociais", { data: result.data });
      } catch (error) {
      }
    }
  }, [initialized]);

  return (
    <>
      <Header />
      <Main>
        <PerfilContent>
          <PerfilOng
            name={ongData.nome ? ongData.nome : "Nome da ONG"}
            img={img}
            tel={ongData.contato ? ongData.contato.telefone : "Telefone da ONG"}
            email={ongData.contato ? ongData.contato.email : "Email da ONG"}
            address={ongData.contato ? ongData.contato.endereco : "Endereço da ONG"}
            category={ongData.categoria ? ongData.categoria.nome : ""}
          />
        </PerfilContent>
        <Divisor></Divisor>
        {/* <PerfilSocialMedias>
          <MidiaSocial
            img={null}
            user={null}
          />
        </PerfilSocialMedias> */}
      </Main>
      <Footer />
    </>
  );
}

export default Perfil