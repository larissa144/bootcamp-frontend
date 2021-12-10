import React, { useState, useEffect } from 'react';
import Header from '../layouts/header'
import Title from '../layouts/title';
import { Main } from './styled';
import Filters from "./Filters";
import OngList from './OngList';
import Footer from '../layouts/footer';
import i1 from '../../assets/img/ong1.png';
import i2 from '../../assets/img/ong2.png';
import i3 from '../../assets/img/ong3.png';

const ongsArr = [
    {
        name: "Ong caminho das crianças",
        img: i1,
        category: "Crianças e adolescentes"
    },
    {
        name: "Juntos contra os vicios",
        img: i2,
        category: "Alcoolismo, drogas"
    },
    {
        name: "Amor de mãe",
        img: i3,
        category: "Mulheres adultas"
    },
    {
        name: "1",
        img: i1,
        category: "Crianças e adolescentes"
    },
    {
        name: "2",
        img: i2,
        category: "Alcoolismo, drogas"
    },
    {
        name: "3",
        img: i3,
        category: "Mulheres adultas"
    }
]

function Ongs() {
    const [ categories, setCategories ] = useState([]);
    const [ searchName, setSearchName ] = useState("");
    const [ ongs, setOngs ] = useState(ongsArr);
    const [ page, setPage ] = useState(0);
    const [ hasPrevious, setHasPrevious ] = useState(false);
    const [ hasNext, setHasNext ] = useState(true);

    useEffect(() => {
        console.log({page})
    }, [ page ]);

    return(
        <>
            <Header categories={categories} setCategories={setCategories} searchName={searchName} setSearchName={setSearchName} />
            <Main>
                <header>
                    <Title title={"Listagem de instituições cadastradas"} />
                    <Filters />
                </header>
                <OngList ongs={ongs} page={page} setPage={setPage} hasPrevious={hasPrevious} hasNext={hasNext} />
            </Main>
            <Footer />
        </>
    )
}

export default Ongs;