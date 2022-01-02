import { useKeycloak } from '@react-keycloak/web';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import defaultImage from '../../assets/img/ong1.png';
import { get } from "../../utils/images"

const PubliDiv = styled.div`
    width: 35%;
    height: 110px;
    background: #FFFFFF;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid #a39f9fa3;
    border-radius: 5px;
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin: 10px auto;
`
const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`
const DivTitle = styled.div`
  width: 80%;
`
const Title = styled.p`
    font-weight: ${props => props.weight};
    font-size: 12px;
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