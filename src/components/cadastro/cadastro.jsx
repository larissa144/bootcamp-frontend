import React from 'react'
import '../../assets/css/style.css'
import styled from 'styled-components'
import LogoImage from '../../assets/img/logo-branco.png'
import { ColorBody } from '../layouts/background-color'
import { Card } from '../layouts/card'
import Button from '../layouts/button'
import Input, {InputFile} from '../layouts/input'

const Logo = styled.img`
  height: 13%;
  width: 58%;
  margin-bottom: 25%;
`
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 60%;
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
`
const Subtitle = styled.p`
  color: #5A5657;
  font-size: 15px;
  margin-top: 2px;
`
function Cadastro() {

    return(
        <ColorBody>
            <DivImg>
                <Logo src={LogoImage}/>
            </DivImg>

            <DivCard>
                <Card width={'350px'} height={'550px'}> 
                    <DivTitles>
                        <Title>Cadastre-se</Title>
                        <Subtitle>É muito simples e fácil</Subtitle>
                    </DivTitles>
                    <DivInput>
                        <Input
                            // onChange={handleChangeEmail}
                            textInput='Nome completo'
                            width={'85%'} 
                            height={'8%'}
                        />
                           <Input
                            // onChange={handleChangeEmail}
                            textInput='CPF'
                            width={'85%'} 
                            height={'8%'}
                        />
                           <Input
                            // onChange={handleChangeEmail}
                            textInput='Telefone'
                            width={'85%'} 
                            height={'8%'}
                        />
                           <Input
                            // onChange={handleChangeEmail}
                            textInput='Endereço'
                            width={'85%'} 
                            height={'8%'}
                        />
                           <Input
                            // onChange={handleChangeEmail}
                            textInput='Senha'
                            width={'85%'} 
                            height={'8%'}
                        />
                           <Input
                            // onChange={handleChangeEmail}
                            textInput='Confirme a senha'
                            width={'85%'} 
                            height={'8%'}
                        />
                           <InputFile
                            // onChange={handleChangeEmail}
                            // width={'85%'} 
                            // height={'8%'}
                        />
                    </DivInput>
                    <DivButton>
                        <Button 
                            textButton='Cadastrar' 
                            width={'45%'} 
                            height={'25%'}
                        />
                    </DivButton>
                </Card>
            </DivCard>
        </ColorBody>
    )
}

export default Cadastro
