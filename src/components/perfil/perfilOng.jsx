import React, { useState } from 'react';
import { OngInfos, OngImgContainer, OngImg } from './styled';
function PerfilOng({ name, img, category, tel, email, address }) {
    return (
        <OngInfos>
            <span>{name}</span>
            <OngImgContainer>
                <OngImg src={img} />
            </OngImgContainer>
            <span>{tel}</span>
            <span>{email}</span>
            <span>{address}</span>
            <span>{category}</span>
        </OngInfos>
    )
}

export default PerfilOng;