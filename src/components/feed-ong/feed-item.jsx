import { useKeycloak } from '@react-keycloak/web';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import defaultImage from '../../assets/img/ong1.png';
import { get } from "../../utils/images"

const PubliDiv = styled.div`
    width: 45%;
    background: #FFFFFF;
    box-shadow: 1px 1px 5px 2px #c7bfbf;
    border-radius: 15px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 25px auto;
    padding 15px 10px;
`
const LogoImage = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 100px;
`
const DivTitle = styled.div`
  width: 80%;
`
const Title = styled.p`
    font-weight: ${props => props.weight};
    font-size: 16px;
    color: #6A676A;
    word-break: break-all;
`
const FeedItem = ({name, text, id}) => {
    const [img, setImg] = useState(defaultImage)
    const { keycloak, initialized } = useKeycloak()

    useEffect(() => {
        const getOngPicture = async () => {
            if(initialized) {
                try {
                    const imgFromApi = await get(`http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/ongs/${id}/download-imagem`, keycloak);
                    if(imgFromApi) {
                        setImg(imgFromApi)
                    }
                } catch (error) {
                    console.error(error)
                }
            }
        }
        getOngPicture();
    }, [ initialized, keycloak, id ])
    return (
        <>
           
                <PubliDiv >
                    <Link to={`/ongs/${id}`}>
                        <LogoImage src={img} />
                    </Link>
                    <DivTitle>
                        <Link to={`/ongs/${id}`}>
                            <Title weight={'600'} >{name}</Title>
                        </Link>
                        <Title weight={'300'} >{text}</Title>
                    </DivTitle>
                </PubliDiv>

        </>
    )
}

export default FeedItem