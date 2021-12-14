import React, { useEffect, useState } from 'react';
import Button from '../layouts/button';
import { OngLi, OngImgContainer, OngImg } from './styled'
import axios from 'axios';
import { getAuthData } from "../../utils/authenticate"

function OngItem({ id, name, category, isFollowing }) {
    const [img, setImg] = useState(null);

    useEffect(async () => {
        const auth = getAuthData();
        const result = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}/download-imagem`, {
            headers: {
                Authorization: "Bearer " + auth.token
            },
            responseType: 'arraybuffer'
        });
        console.log(Buffer.from(result.data, 'binary').toString('base64'))
        setImg(Buffer.from(result.data, 'binary').toString('base64'))
    }, []);

    return (
            <OngLi>
                <span>{name}</span>
                <OngImgContainer>
                    <OngImg src={`data:image/jpeg;base64,${img}`} />
                </OngImgContainer>
                <span>{category}</span>
                <Button width={"120px"} color={isFollowing} textButton={!isFollowing ? "Seguir" : "Desseguir" }></Button>
            </OngLi>
        )
}

export default OngItem;