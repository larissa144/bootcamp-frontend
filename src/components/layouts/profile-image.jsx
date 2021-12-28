import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import axios from 'axios';
import { get } from "../../utils/images"

const ProfileImageContainer = styled.div`
    width: 60px;
    height: 60px;
    position: relative;
    cursor: pointer;

    > div {
        opacity: 0
    }
    
    :hover > div {
        opacity: 1
    }
`

const Img = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    `
    
const CallToChangeImageLayer = styled.div`
    width: 60px;
    height: 60px;
    background-color: rgba(0,0,0,.7);
    position: absolute;
    top: 0;
    border-radius: 50%;
    left: 0;
    color: white;
    text-align: center;
    transition: .8s;
    font-size: .8em;
    padding: 15px 0;
`

const ProfileImageInput = styled.input`
    display: none
`

const ProfileImage = ( {img, setImg} ) => {
    const { keycloak } = useKeycloak()
    const inputRef = React.useRef(null);
    const [newProfileImg, setNewProfileImg] = useState(null);

    useEffect(() => {
        const setProfilePicture = async () => {
            try {
                if(!newProfileImg) return;
                const formData = new FormData();
                formData.append('arquivo', newProfileImg)
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data',
                        Authorization: "Bearer " + keycloak.token
                    }
                }
                await axios.put(
                    `http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/usuarios/upload-imagem`,
                    formData,
                    config
                );
                setImg(await get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/usuarios/download-imagem`, keycloak, false))
            } catch (error) {
                alert("Erro ao trocar imagem de perfil, tente outro arquivo.")
            }
        }
        setProfilePicture();
    }, [ newProfileImg, keycloak.token, keycloak, setImg ])

    return(
        <ProfileImageContainer>
            <Img src={img} />
            <CallToChangeImageLayer onClick={() => {
                inputRef.current.click()
            }}>Trocar foto</CallToChangeImageLayer>
            <ProfileImageInput onChange={(e) => {
                setNewProfileImg(e.target.files[0])
            }} ref={inputRef} type="file" />
        </ProfileImageContainer>
    )
}

export default ProfileImage