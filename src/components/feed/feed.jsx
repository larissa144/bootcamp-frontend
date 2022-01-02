import React from 'react'
import Header from '../layouts/header'
import styled from 'styled-components'
import Lari from '../../assets/img/lari.png'

const AllElements = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: center#F8F8FB;
    height: 100vh;
`
const PubliDiv = styled.div`
    width: 40%;
    height: ${props => props.height};
    background: #FFFFFF;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid #a39f9fa3;
    border-radius: 20px;
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 5%;
`
const TextArea = styled.textarea`
    width: 90%;
    height: 40px;
    font-weight: 300;
    font-size: 12px;
    border-radius: 5px;
    color: #6A676A;
    :focus {
    outline: 0;
    }
`

const Images = styled.img`
  width: ${props => props.width};
`
const DivArea = styled.div`
  width: 80%;
`
const TextName = styled.p`
    font-weight: ${props => props.weight};
    font-size: 12px;
    color: #6A676A;
`
const BtnReacts = styled.button`
    width: 50px;
    height: 20px;
`

const FeedPage = () => {
    return(
        <AllElements>
        {/* <Header /> */}

        <PubliDiv height={'130px'}>  
            <Images width={'12%'} src={Lari} />
            <DivArea>
                <TextName weight={'600'}>Larissa Alves</TextName>
                <TextArea id='publiTextArea' placeholder='Que tal publicar algo hoje?' name='publiTextArea'/> 
            </DivArea>
        </PubliDiv>

        <PubliDiv height={'30%'}> 
            <Images width={'10%'} src={Lari} />
            <DivArea>
                <TextName weight={'600'}>Larissa Alves</TextName>
                <TextName weight={'300'}>Bom dia pessoal, tudo bem com vocês? </TextName>
            </DivArea>

                        {/* <BtnReacts> Curtir </BtnReacts> */}
            
        </PubliDiv>

       
    </AllElements>
    )
}

export default FeedPage