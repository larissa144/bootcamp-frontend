import React, { useState } from 'react';
import { OngLi, OngImgContainer, OngImg } from './styled'

function OngItem({ name, img, category, isFollowing }) {
    return (
            <OngLi>
                <span>{name}</span>
                <OngImgContainer>
                    <OngImg src={img} />
                </OngImgContainer>
                <span>{category}</span>
                <button isFollowing={isFollowing}>{ !isFollowing ? "Seguir" : "Desseguir" }</button>
            </OngLi>
        )
}

export default OngItem;