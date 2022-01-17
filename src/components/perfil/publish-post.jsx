import React, { useState } from 'react';
import { useKeycloak } from '@react-keycloak/web'
import { PublishContainer, PublishTextarea, PublishButton } from './styled'
import { handleChange } from '../../utils/handleChange'
import axios from 'axios';
import Button from "../layouts/button"

function PublishPost({ ong, newPosts, setNewPosts }) {
    const { keycloak } = useKeycloak();
    const [ text, setText ] = useState("");

    const post = async () => {
        try {
            await axios.post(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/feed/ongs/${ong.id}/mensagens-feed`, 
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
        <>
            { ong.gestor && (
                <PublishContainer>
                    <PublishTextarea maxLength="140" placeholder="Escreva algo para seus seguidores" onChange={handleChange(setText)} value={text}></PublishTextarea>
                    <Button width="80px" onClick={post} textButton="Publicar" />
                </PublishContainer>
            ) }
        </>
    );
}

export default PublishPost