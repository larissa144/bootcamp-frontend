import React, { useEffect, useState } from 'react';
import Button from '../layouts/button';
import { OngLi, OngImgContainer, OngImg } from './styled'
import axios from 'axios';
import defaultImage from '../../assets/img/ong1.png';
import { useKeycloak } from '@react-keycloak/web'
import { Link } from 'react-router-dom';

function OngItem({ id, name, category, isFollowing, ongs, setOngs }) {
    const { keycloak, initialized } = useKeycloak()
    const [img, setImg] = useState(null);
    

    useEffect(async () => {
        if(initialized) {
            try {
                const result = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}/download-imagem`, {
                    headers: {
                        Authorization: "Bearer " + keycloak.token
                    },
                    responseType: 'arraybuffer'
                });
                setImg(`data:image/jpeg;base64,${Buffer.from(result.data, 'binary').toString('base64')}`)
            } catch (error) {
                setImg(defaultImage)
            }
        }
    }, [ initialized ])

    const toggleFollow = async () => {
        const seguir = !isFollowing;
        try {
            const result = await axios.put(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}/seguir`,
                {
                    seguir
                },
                {
                    headers: {
                        Authorization: "Bearer " + keycloak.token
                    },
                }
            );

            const newOngs = ongs.map(item => {
                if(item.id !== id){
                    return item
                }
                const newItem = { ...item };
                newItem.situacao = seguir ? "SEGUINDO" : "NAO_SEGUINDO";
                return newItem;
            })
            setOngs(newOngs)
            console.log({result})

        } catch (error) {
        }
    }

    return (
            <OngLi key={id}>
                <Link to={`/ongs/${id}`}>
                    <span>{name}</span>
                </Link>
                <OngImgContainer>
                    <Link to={`/ongs/${id}`}>
                        <OngImg src={img} />
                    </Link>
                </OngImgContainer>
                <span>{category}</span>
                <Button onClick={toggleFollow} width={"120px"} active={isFollowing} textButton={!isFollowing ? "Seguir" : "Desseguir" }></Button>
            </OngLi>
        )
}

export default OngItem;