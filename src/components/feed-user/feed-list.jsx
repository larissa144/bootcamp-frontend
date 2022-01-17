import FeedItem from './feedItem'
import Pagination from '../ongs/Pagination'
import styled from 'styled-components'

const FeedContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 30px 0;
`

const FeedList = ({feed, setFeed, page, setPage,  hasNext, hasPrevious}) =>{

    return (

        <>
        <FeedContainer>
            {
                feed && feed.map(item => {
                return(
                    <FeedItem key={item.id} name={item.ong.nome} text={item.texto} id={item.ong.id}/>
                    )
                })
            }
        </FeedContainer>
            {
                feed.length > 0 && (  <Pagination page={page} setPage={setPage} hasPrevious={hasPrevious} hasNext={hasNext} /> )
            }
        </>
    )


}

export default FeedList