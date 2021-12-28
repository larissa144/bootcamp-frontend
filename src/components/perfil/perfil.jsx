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
import { get } from "../../utils/images"

function Perfil() {
    const { keycloak, initialized } = useKeycloak();
    const [ ongData, setOngData ] = useState({});
    const [ img, setImg ] = useState(defaultImage);
    const [ socialMedias, setSocialMedias ] = useState([]);

    let { id } = useParams();

    useEffect(() => { 
        const getOngData = async () => {
            if (initialized) {
                try {
                    const ongResult = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}`, {
                        headers: {
                        Authorization: "Bearer " + keycloak.token
                        }
                    });
                    setOngData(ongResult.data);
                } catch (error) {
                    console.error(error);
                }
            }
        }
        getOngData();
    }, [initialized, keycloak.token, id]);

    useEffect(() => {
        const getSocialMedias = async () => {
            if (initialized) {
                try {
                    const socialMediaResult = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}/redes-sociais`, {
                        headers: {
                            Authorization: "Bearer " + keycloak.token
                        },
                    });
                    setSocialMedias(socialMediaResult.data.content);
                    
                } catch (error) {
                    console.error(error);
                }
            }
        }
        getSocialMedias()
    }, [initialized, keycloak.token, id]);

    useEffect(() => {
        const getPicture = async () => {
            if (initialized) {
                try {
                    setImg(await get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}/download-imagem`, keycloak));
                } catch (error) {
                    console.error(error);
                }
            }
        }
        getPicture();
    }, [initialized, keycloak, id]);

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