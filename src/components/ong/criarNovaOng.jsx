import React from 'react'
import '../../assets/css/style.css'
import styled from 'styled-components'
import { ColorBodyWhite } from '../layouts/background-color'
import { Card } from '../layouts/card'
import  Header from '../layouts/header'
import Button from '../layouts/button'
import Input from '../ong/styled'
import { FiUser } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";


const DivImg = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const DivCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const DivTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
`
const DivInput = styled.div`
  margin-bottom: auto;
  flex-direction: column;
  display: flex;
  width: 100%;
`  
const DivButton = styled.div`
  margin-bottom: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 20%;
`
const Title = styled.p`
    color: #5A5657;
    font-size: 20px;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
`

const Subtitle = styled.p`
  color: #5A5657;
  font-size: 15px;
  margin-top: 2px;
`


function CriarNovaOng() {

    return(
      <>
        <Header />
          <ColorBodyWhite>
              <DivImg>
                  <h3>Upload de imagem</h3>
              </DivImg>
              
              <DivCard>
                   <Card width={'50%'}> 
                      <DivTitles>
                          <Title>Criar uma nova ONG</Title>
                          <Subtitle>É muito simples e fácil.</Subtitle>
                      </DivTitles>
                     
                      <DivInput>
                          <Input
                              // onChange={handleChangeEmail}
                              icon={FiUser}
                              textInput='Nome da ONG'
                              width={'85%'} 
                              height={'8%'}
                          />
                            <Input
                              // onChange={handleChangeEmail}
                              icon={FiMail}
                              textInput='E-mail'
                              width={'85%'} 
                              height={'8%'}
                          />
                            <Input
                              // onChange={handleChangeEmail}
                              icon={FiPhone}
                              textInput='Telefone'
                              width={'85%'} 
                              height={'8%'}
                          />
                            <Input
                              // onChange={handleChangeEmail}
                              icon={FiMapPin}
                              textInput='Endereço'
                              width={'85%'} 
                              height={'8%'}
                          />
                            <Input
                              // onChange={handleChangeEmail}
                              icon={FiFileText}
                              textInput='Categoria'
                              width={'85%'} 
                              height={'8%'}
                          />
                      </DivInput>
                      <DivButton>
                          <Button 
                              textButton='Criar nova conta' 
                              width={'45%'} 
                              height={'25%'}
                          />
                      </DivButton>
                  </Card>
              </DivCard>
            </ColorBodyWhite>
        </>
    )
}

export default CriarNovaOng
