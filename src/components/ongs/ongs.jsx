import React, { useState } from 'react';
import Header from '../layouts/header'
import Title from '../layouts/title';
import { Main } from './styled';
import Filters from "./filters";
import OngList from './OngList';

function Ongs() {
    const [ categories, setCategories ] = useState([]);
    const [ searchName, setSearchName ] = useState("");
    const [ ongs, setOngs ] = useState([]);
    return(
        <>
            <Header categories={categories} setCategories={setCategories} searchName={searchName} setSearchName={setSearchName} />
            <Main>
                <header>
                    <Title title={"Listagem de instituições cadastradas"} />
                    <Filters />
                </header>
                <OngList ongs={ongs} />
            </Main>
        </>
    )
}

export default Ongs;