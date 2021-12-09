import React, { useState } from 'react';
import OngItem from './OngItem';
import Pagination from './Pagination';
import i1 from '../../assets/img/ong1.png';
import i2 from '../../assets/img/ong2.png';
import i3 from '../../assets/img/ong3.png';
import { OngsUl } from './styled'

function OngList({ ongs }) {
    console.log({ongs})
    return (
        <>
            <OngsUl>
                <OngItem name="Ong caminho das crianças" img={i1} category="Crianças e adolescentes" isFollowing={false}/>
                <OngItem name="Amor de mãe" img={i2} category="Mulheres adultas" isFollowing={true}/>
                <OngItem name="Juntos contra os vicios" img={i3} category="Alcoolismo, drogas, vicios em geral." isFollowing={false}/>
            </OngsUl>
            <Pagination />
        </>
    );
}

export default OngList;