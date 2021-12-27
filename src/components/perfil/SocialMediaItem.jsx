import React, { useState, useEffect } from 'react';
import { SocialMediaListItemContainer, SocialMediaImg } from './styled'
import { useKeycloak } from '@react-keycloak/web'
import axios from 'axios';

function SocialMediaItem( { data } ) {
    const { keycloak, initialized } = useKeycloak(); 
    const [ img, setImg ] = useState(null);

    useEffect(async () => {
        if (initialized) {
            try {
                const result = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/redes-sociais/${data.redeSocial.id}/download-imagem`, {
                    headers: {
                        Authorization: "Bearer " + keycloak.token
                    },
                    responseType: 'arraybuffer'
                });
                setImg(`data:image/jpeg;base64,${Buffer.from(result.data, 'binary').toString('base64')}`)
            } catch (error) {
                console.log(error);
            }
        }
    }, [initialized]);

    return (
        <SocialMediaListItemContainer>
            <SocialMediaImg src={img} />
            {data.identificador}
        </SocialMediaListItemContainer>
    )
}

export default SocialMediaItem