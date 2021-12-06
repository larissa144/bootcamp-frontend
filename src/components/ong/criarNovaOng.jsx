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
  margin-bottom: 0;
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
  font-size: 30px;
  margin-bottom: 0px;
`
const Subtitle = styled.p`
  color: #5A5657;
  font-size: 15px;
  margin-top: 0.10em;
  text-indent: 0;
  padding-right: 8em;
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
                  <Card width={'350px'} height={'550px'}> 
                      <DivTitles>
                          <Title>Criar uma nova ONG</Title>
                          <Subtitle>É muito simples e fácil.</Subtitle>
                      </DivTitles>
                     
                      <DivInput>
                          <Input
                              // onChange={handleChangeEmail}
                              icon={FiUser}
                              textInput='Nome da ONG'
                              width={'95%'} 
                              height={'12%'}
                          />
                            <Input
                              // onChange={handleChangeEmail}
                              icon={FiMail}
                              textInput='E-mail'
                              width={'95%'} 
                              height={'12%'}
                          />
                            <Input
                              // onChange={handleChangeEmail}
                              icon={FiPhone}
                              textInput='Telefone'
                              width={'95%'} 
                              height={'12%'}
                          />
                            <Input
                              // onChange={handleChangeEmail}
                              icon={FiMapPin}
                              textInput='Endereço'
                              width={'95%'} 
                              height={'12%'}
                          />
                            <Input
                              // onChange={handleChangeEmail}
                              icon={FiFileText}
                              textInput='Categoria'
                              width={'95%'} 
                              height={'12%'}
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
