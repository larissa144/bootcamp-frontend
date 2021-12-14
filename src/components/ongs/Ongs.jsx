import React, { useState, useEffect } from 'react';
import Header from '../layouts/header'
import Title from '../layouts/title';
import { Main } from './styled';
import Filters from "./Filters";
import OngList from './OngList';
import Footer from '../layouts/footer';
import axios from 'axios';
import { getAuthData } from "../../utils/authenticate"

function Ongs() {
    const [ categories, setCategories ] = useState([]);
    const [ searchName, setSearchName ] = useState("");
    const [ ongs, setOngs ] = useState([]);
    const [ page, setPage ] = useState(0);
    const [ hasPrevious, setHasPrevious ] = useState(false);
    const [ hasNext, setHasNext ] = useState(true);

    useEffect(() => {
        console.log({page})
        console.log({searchName})
        console.log({categories})
    }, [ page, searchName, categories ]);

    useEffect(async () => {
        const auth = getAuthData();
        console.log({auth})
        const result = await axios.get("http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs", {
            headers: {
                Authorization: "Bearer " + auth.token
            }
        });
        setOngs([ ...result.data.content ]);
    }, []);

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