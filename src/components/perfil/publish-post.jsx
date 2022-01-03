import React, { useState, useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web'
import { PublishContainer, PublishTextarea, PublishButton } from './styled'
import { handleChange } from '../../utils/handleChange'
import axios from 'axios';

function PublishPost({ ong, newPosts, setNewPosts }) {
    const { keycloak, initialized } = useKeycloak();
    const [ text, setText ] = useState("");

    const post = async () => {
        try {
            const result = await axios.post(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/feed/ongs/${ong.id}/mensagens-feed`, 
            {
                texto: text
            }, 
            {
                headers: {
                    Authorization: "Bearer " + keycloak.token
                }
            });
            setNewPosts(text);
            setText("");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <PublishContainer>
            { ong.gestor && (
                <>
                    <PublishTextarea placeholder="Escreva algo para seus seguidores" onChange={handleChange(setText)} value={text}></PublishTextarea>
                    <PublishButton onClick={post}>Postar</PublishButton>
                </>
            ) }
        </PublishContainer>
    );
}

export default PublishPost