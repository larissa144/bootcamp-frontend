import React, { useState, useEffect } from 'react';
import Header from '../layouts/header'
import Title from '../layouts/title';
import { Main } from './styled';
import Filters from "./Filters";
import OngList from './OngList';
import Footer from '../layouts/footer';
import axios from 'axios';
import { useKeycloak } from '@react-keycloak/web'

function Ongs() {
    const [ category, setCategory ] = useState("");
    const [ searchName, setSearchName ] = useState("");
    const [ ongs, setOngs ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ hasPrevious, setHasPrevious ] = useState(false);
    const [ hasNext, setHasNext ] = useState(false);
    const { keycloak, initialized } = useKeycloak();

    useEffect(() => {
        console.log({page})
        console.log({searchName})
        console.log({category})
    }, [ page, searchName, category ]);

    useEffect(async () => {
        if(initialized) {
            const params = {
                pagina: page,
                qtdPorPagina: 3,
            }

            if(searchName) {
                params.nome = searchName;
            }
            
            if(category) {
                params.nomeCategoria = category;
            }

            const result = await axios.get("http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs", {
                headers: {
                    Authorization: "Bearer " + keycloak.token
                },
                params
            });
            console.log("***", result.data);
            setHasPrevious(result.data.temPaginaAnterior);
            setHasNext(result.data.temProximaPagina);
            setOngs([ ...result.data.content ]);
        }
    }, [ initialized, page, searchName, category ]);

    return(
        <>
            <Header />
            <Main>
                <header>
                    <Title title={"Listagem de instituições cadastradas"} />
                    <Filters category={category} setCategory={setCategory} searchName={searchName} setSearchName={setSearchName} page={page} setPage={setPage} />
                </header>
                <OngList ongs={ongs} setOngs={setOngs} page={page} setPage={setPage} hasPrevious={hasPrevious} hasNext={hasNext} />
            </Main>
            <Footer />
        </>
    )
}

export default Ongs;