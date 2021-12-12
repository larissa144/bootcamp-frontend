import React, { useState } from 'react';
import { OngLi, OngImgContainer, OngImg } from './styled';
function PerfilOng({ name, img, category, tel, email, address }) {
    return (
        <OngLi>
            <span>{name}</span>
            <OngImgContainer>
                <OngImg src={img} />
            </OngImgContainer>
            <span>{tel}</span>
            <span>{email}</span>
            <span>{address}</span>
            <span>{category}</span>
        </OngLi>
    )
}

export default PerfilOng;