import styled from 'styled-components';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useKeycloak } from '@react-keycloak/web';
import axios from 'axios';

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

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
    line-height: 60px;
    text-align: center
`

const ProfileImageInput = styled.input`
    display: none
`

const ProfileImage = ( {img, setImg} ) => {
    const { keycloak, initialized } = useKeycloak()
    const inputRef = React.useRef(null);
    const [newProfileImg, setNewProfileImg] = useState(null);

    useEffect(async () => {
        try {
            if(!newProfileImg) return
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
            const fileBase64 = await getBase64(newProfileImg);
            setImg(fileBase64);
        } catch (error) {
            alert("Erro ao trocar imagem de perfil, tente outro arquivo.")
        }
    }, [ newProfileImg ])

    return(
        <ProfileImageContainer>
            <Img src={img} />
            <CallToChangeImageLayer onClick={() => {
                inputRef.current.click()
            }}>Trocar</CallToChangeImageLayer>
            <ProfileImageInput onChange={(e) => {
                setNewProfileImg(e.target.files[0])
            }} ref={inputRef} type="file" />
        </ProfileImageContainer>
    )
}

export default ProfileImage