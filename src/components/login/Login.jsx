/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled from 'styled-components'
import '../../assets/css/style.css'
import LogoImage from '../../assets/img/logo-branco.png'
import { ColorBody } from '../layouts/background-color'
import { Card } from '../layouts/card'
import Button from '../layouts/button'
import Input from '../layouts/input'
import { Link } from 'react-router-dom'

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
const DivInput = styled.div`
  margin-bottom: auto;
  padding: 22px 22px 0px 22px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
const DivCreateAcount = styled.div`
  justify-content: center;
  align-items: center;
  height: 28%;
  width: 100%;
  display: flex;
`

const TextForgetPass = styled.p`
  color: rgba(8, 8, 8, 0.5);
  font-size: 15px;
  text-align: center;
`

function Login() {

  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const handleChangeEmail = (event) => {
    setInputEmail(event.target.value)
  }
  
  const handleChangePassword = (event) => {
    setInputPassword(event.target.value)
  }

  return (
    
  <ColorBody>
    <DivImg>
      <Logo src={LogoImage}/>
    </DivImg>
 
    <DivCard>
      <Card width={'300px'} height={'300px'}>

        <DivInput>
          <Input
            onChange={handleChangeEmail}
            textInput='e-mail'
            width={'100%'} 
            height={'18%'}
          />
          <Input
            onChange={handleChangePassword}
            textInput='senha'
            width={'100%'} 
            height={'18%'}
          />
          <Button 
            textButton='Entrar' 
            width={'100%'} 
            height={'18%'}
        />
        <TextForgetPass>Esqueceu sua senha?</TextForgetPass>
        </DivInput>
        <DivCreateAcount>
        <Link to='/cadastro' style={{width:'100%', height: '28%', display:'flex', alignItems:'center', justifyContent: 'center'}}> 
          <Button textButton='Criar conta' width={'45%'} height={'30%'}/>
        </Link>
          
        </DivCreateAcount>

      </Card>
    </DivCard>

  </ColorBody>

  )
}

export default Login;
