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
                        <OngItem name={ong.name} img={ong.img} category={ong.category} isFollowing={true}/>
                    )
                }) }
            </OngsUl>
            <Pagination page={page} setPage={setPage} hasPrevious={hasPrevious} hasNext={hasNext} />
        </>
    );
}

export default OngList;