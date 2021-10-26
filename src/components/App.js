import React from 'react'
import styled from 'styled-components'
import '../assets/css/style.css'
import LogoImage from '../assets/img/logo-branco.png'
import { ColorBody } from '../assets/css/background-color'
import { Card } from '../assets/css/card'
import Button from '../assets/css/button'
import Input from '../assets/css/input'

const Logo = styled.img`
  height: 13%;
  width: 58%;
  margin-left: 22%;
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
const DivInput = styled.div`
  margin-bottom: auto;
  padding: 22px;
`

function App() {

  return (
    
  <ColorBody>
    <DivImg>
      <Logo src={LogoImage}/>
    </DivImg>
 
    <DivCard>
      <Card width={'300px'} height={'300px'}>

        <DivInput>
          <Input
            textInput='e-mail'
            width={'100%'} 
            height={'42%'}
          />
          <Input
            textInput='senha'
            width={'100%'} 
            height={'42%'}
          />
        </DivInput>

        <Button 
          textButton='Entrar' 
          width={'70%'} 
          height={'9%'}
        />
      </Card>
    </DivCard>

  </ColorBody>

  )
}

export default App;
