import React, { useEffect, useState } from 'react'
import Header from '../layouts/header'
import { useKeycloak } from '@react-keycloak/web'
import axios from "axios"
import FeedList from './feed-list'
import styled from 'styled-components'

const AllElements = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #E5E5E5;
`

const FeedUser = () => {
    const { keycloak, initialized } = useKeycloak();
    const [ page, setPage ] = useState(1);
    const [feed, setFeed] = useState([])
    const [ hasPrevious, setHasPrevious ] = useState(false);
    const [ hasNext, setHasNext ] = useState(false);

    useEffect(() => {
        const getFeed = async () => {
            if(initialized) {

                const params = {
                    pagina: page,
                    qtdPorPagina: 5,
                }

                const result = await axios.get("http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/feed/usuarios/mensagens-feed", {
                    headers: {
                        Authorization: "Bearer " + keycloak.token
                    },
                    params
                });
                setHasPrevious(result.data.temPaginaAnterior);
                setHasNext(result.data.temProximaPagina);
                setFeed([ ...result.data.content ]);
            }
        }
        getFeed();
    }, [ initialized, page,keycloak.token ]);

    return(
        <>
        <Header />
        <AllElements> 
            <FeedList feed={feed} setFeed={setFeed} page={page} setPage={setPage} hasPrevious={hasPrevious} hasNext={hasNext} />
        </AllElements>
        </>
    )
}

export default FeedUser