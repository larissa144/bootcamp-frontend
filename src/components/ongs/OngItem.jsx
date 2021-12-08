import React, { useState } from 'react';
import { OngLi, OngImgContainer, OngImg, FollowButton } from './styled'

function OngItem({ name, img, category, isFollowing }) {
    return (
            <OngLi>
                <span>{name}</span>
                <OngImgContainer>
                    <OngImg src={img} />
                </OngImgContainer>
                <span>{category}</span>
                <FollowButton isFollowing={isFollowing}>{ !isFollowing ? "Seguir" : "Desseguir" }</FollowButton>
            </OngLi>
        )
}

export default OngItem;