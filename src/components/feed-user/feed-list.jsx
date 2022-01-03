import FeedItem from './feedItem'
import Pagination from '../ongs/Pagination'

const FeedList = ({feed, setFeed, page, setPage,  hasNext, hasPrevious}) =>{

    return (

        <>
        {feed && feed.map(item => {

            return(
            <FeedItem key={item.id} name={item.ong.nome} text={item.texto} id={item.ong.id}/>
            )
        })}
        {
                feed.length > 0 && (  <Pagination page={page} setPage={setPage} hasPrevious={hasPrevious} hasNext={hasNext} /> )
            }
        </>
    )


}

export default FeedList