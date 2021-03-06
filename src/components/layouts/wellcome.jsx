import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { useKeycloak } from '@react-keycloak/web';
import axios from 'axios';
import ProfileImage from './profile-image'

const WellcomeDiv = styled.div`
    display: flex;
`

const Span = styled.span`
    color: white;
    line-height: 60px;
    display: block;
    padding: 0 20px;
`

const Wellcome = ( ) =>{
    const { keycloak, initialized } = useKeycloak()
    const [ name, setName ] = useState("");
    const [ img, setImg ] = useState(null);

    useEffect(async () => {
        if(initialized) {
            setName(keycloak.tokenParsed.name)
        }
        
        try {
            const result = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/usuarios/download-imagem`, {
                headers: {
                    Authorization: "Bearer " + keycloak.token
                },
                responseType: 'arraybuffer'
            });
            setImg(`data:image/jpeg;base64,${Buffer.from(result.data, 'binary').toString('base64')}`)
        } catch (error) {

        }
    }, [ initialized ]);

    return(
        <WellcomeDiv>
            <ProfileImage img={img} />
            <Span>Bem vindo, {name}.</Span>
        </WellcomeDiv>
    )
}

export default Wellcome