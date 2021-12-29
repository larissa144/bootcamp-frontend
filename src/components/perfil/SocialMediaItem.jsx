import React, { useState, useEffect } from 'react';
import { SocialMediaListItemContainer, SocialMediaImg } from './styled'
import { useKeycloak } from '@react-keycloak/web'
import { get } from "../../utils/images"

function SocialMediaItem( { data } ) {
    const { keycloak, initialized } = useKeycloak(); 
    const [ img, setImg ] = useState(null);

    useEffect(() => { 
        const getPicture = async () => {
            if (initialized) {
                try {
                    const imageFromApi = await get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/redes-sociais/${data.redeSocial.id}/download-imagem`, keycloak)
                    if(imageFromApi) {
                        setImg(imageFromApi)
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        getPicture();
    }, [initialized, keycloak, data.redeSocial.id]);

    return (
        <SocialMediaListItemContainer>
            <SocialMediaImg src={img} />
            {data.identificador}
        </SocialMediaListItemContainer>
    )
}

export default SocialMediaItem