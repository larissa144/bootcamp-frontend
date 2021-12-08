import React, { useState } from 'react';
import Button from '../layouts/button';
import { OngLi, OngImgContainer, OngImg } from './styled'

function OngItem({ name, img, category, isFollowing }) {
    return (
            <OngLi>
                <span>{name}</span>
                <OngImgContainer>
                    <OngImg src={img} />
                </OngImgContainer>
                <span>{category}</span>
                <Button width={"120px"} color={isFollowing} textButton={!isFollowing ? "Seguir" : "Desseguir" }></Button>
            </OngLi>
        )
}

export default OngItem;