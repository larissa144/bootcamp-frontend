import React, { useEffect, useState } from 'react'
import { useKeycloak } from '@react-keycloak/web'
import axios from "axios"
import FeedList from './feed-list'
import styled from 'styled-components'

const AllElements = styled.div`
    height: auto;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const MsgErro = styled.div`
    width: 35%;
    height: 200px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid #a39f9fa3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
    margin-top: 4%;
    padding: 15px;
`
const TextError = styled.p`
    font-size: 16px;
    text-align: center;
    color: #333232;
`

const FeedOng = ({ id, newPosts }) => {
    const { keycloak, initialized } = useKeycloak();
    const [ page, setPage ] = useState(1);
    const [feed, setFeed] = useState([])
    const [ hasPrevious, setHasPrevious ] = useState(false);
    const [ hasNext, setHasNext ] = useState(false);
    const [ lastNewPosts, setLastNewPosts ] = useState([]);

    useEffect(() => {
        const getFeedOng = async () => {
            let pageOfPosts = page;
            if(lastNewPosts.length !== newPosts.length) {
                pageOfPosts = 1;
                setPage(1)
                setLastNewPosts([ ...newPosts])
            }
            if(initialized) {
                const params = {
                    pagina: pageOfPosts,
                    qtdPorPagina: 5,
                    ordenacao: 'DESC'
                }

                const result = await axios.get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/feed/ongs/${id}/mensagens-feed`, {
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
        getFeedOng();
    }, [ initialized, page, keycloak.token, newPosts, id ]);

    return(
        
        <AllElements> 
            {feed.length === 0 || null ? (
                <MsgErro>
                    <TextError> Não há nada no feed para ser exibido</TextError>
                </MsgErro>
            ) : (
                <FeedList feed={feed} setFeed={setFeed} page={page} setPage={setPage} hasPrevious={hasPrevious} hasNext={hasNext} />
            )}
           
        </AllElements>
    )
}

export default FeedOng