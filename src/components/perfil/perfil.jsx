import React, { useState, useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web'
import Header from '../layouts/header'
import PerfilOng from './perfilOng';
import { Main, PerfilContent, PerfilSocialMedias, Divisor } from './styled'
import defaultImage from '../../assets/img/ong1.png';
import { useParams } from 'react-router-dom';
import Footer from '../layouts/footer';
import axios from 'axios';
import SocialMediaList from './SocialMediaList';

function Perfil() {
    const { keycloak, initialized } = useKeycloak();
    const [ ongData, setOngData ] = useState({});
    const [ img, setImg ] = useState(defaultImage);
    const [ socialMedias, setSocialMedias ] = useState([]);

    let { id } = useParams();

    useEffect(async () => {
        if (initialized) {
            try {
                const ongResult = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}`, {
                    headers: {
                    Authorization: "Bearer " + keycloak.token
                    }
                });
                setOngData(ongResult.data);
            } catch (error) {
                console.log(error);
            }
        }
    }, [initialized]);

    useEffect(async () => {
        if (initialized) {
            try {
                const socialMediaResult = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}/redes-sociais`, {
                    headers: {
                    Authorization: "Bearer " + keycloak.token
                    },
                    responseType: 'array'
                });
                console.log("redes_sociais", { data: socialMediaResult.data.content });
                setSocialMedias(socialMediaResult.data.content);
            } catch (error) {
                console.log(error);
            }
        }
    }, [initialized]);

    useEffect(async () => {
        if (initialized) {
            try {
                const imgResult = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}/download-imagem`, {
                    headers: {
                    Authorization: "Bearer " + keycloak.token
                    },
                    responseType: 'arraybuffer'
                });
                setImg(`data:image/jpeg;base64,${Buffer.from(imgResult.data, 'binary').toString('base64')}`);
            } catch (error) {
                console.log(error);
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
                        tel={ongData.contato ? ongData.contato.telefone : "..."}
                        email={ongData.contato ? ongData.contato.email : "..."}
                        address={ongData.contato ? ongData.contato.endereco : "..."}
                        category={ongData.categoria ? ongData.categoria.nome : "..."}
                    />
                </PerfilContent>
                <Divisor></Divisor>
                <PerfilSocialMedias>
                    <SocialMediaList socialMedias={socialMedias} />
                </PerfilSocialMedias>
            </Main>
            <Footer />
        </>
    );
}

export default Perfil