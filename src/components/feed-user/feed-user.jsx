import React, { useEffect, useState } from 'react'
import Header from '../layouts/header'
import { useKeycloak } from '@react-keycloak/web'
import axios from "axios"
import FeedList from './feed-list'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AllElements = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #E5E5E5;
`
const MsgErro = styled.div`
    width: 40%;
    height: 230px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid #a39f9fa3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
    margin-top: 10%;
    padding: 15px;
`
const TextError = styled.p`
    font-size: 16px;
    text-align: center;
    color: #333232;
`
const TextLink = styled.p`
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
    color: #440A67;
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
            {feed.length === 0 || null ? (
                <MsgErro>
                    <TextError> você ainda não tem nada pra conferir, que tal começar seguindo alguma ong?</TextError>
                    <Link to={'/ongs'}>
                        <TextLink>clique aqui para conferir as ongs</TextLink>
                    </Link>

                </MsgErro>
            ) : (
                <FeedList feed={feed} setFeed={setFeed} page={page} setPage={setPage} hasPrevious={hasPrevious} hasNext={hasNext} />
            )}
           
        </AllElements>
        </>
    )
}

export default FeedUser