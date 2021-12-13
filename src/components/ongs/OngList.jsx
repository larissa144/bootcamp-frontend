import React, { useState } from 'react';
import OngItem from './OngItem';
import Pagination from './Pagination';
import { OngsUl } from './styled'

function OngList({ ongs, page, setPage, hasNext, hasPrevious }) {
    return (
        <>
            <OngsUl>
                { ongs.map(ong => {
                    return (
                        <OngItem id={ong.id} name={ong.nome} img={null} category={ong.categoria.nome} isFollowing={ong.situacao === "SEGUINDO"}/>
                    )
                }) }
            </OngsUl>
            <Pagination page={page} setPage={setPage} hasPrevious={hasPrevious} hasNext={hasNext} />
        </>
    );
}

export default OngList;