import React, { useEffect, useState } from 'react'
import '../../assets/css/style.css'
import styled from 'styled-components'
import LogoImage from '../../assets/img/logo-branco.png'
import { ColorBody } from '../layouts/background-color'
import { Card } from '../layouts/card'
import Button from '../layouts/button'
import Input from '../layouts/input'
import { handleChange } from '../../utils/handleChange';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

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
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
`
const Subtitle = styled.p`
  color: #5A5657;
  font-size: 15px;
  margin-top: 2px;
`

const Message = styled.p`
    padding: 5px;
`

function Cadastro() {
    const navigate = useNavigate();
    const [ name, setName ] = useState("");
    const [ cpf, setCpf ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ passwordConfirmation, setPasswordConfirmation ] = useState("");
    const [ message, setMessage ] = useState("");

    useEffect(() => {
        setMessage("");
    }, [ name, cpf, email, phone, address, password ]);
    
    useEffect(() => {
        if(password === passwordConfirmation) {
            setMessage("");
        } else {
            setMessage("As senhas não são iguais.");
        }
    }, [ password, passwordConfirmation ]);

    const register = async () => {
        try {
            if(password !== passwordConfirmation) {
                setMessage("As senhas não são iguais.");
                return;
            }
            setMessage("Carregando...");
            await axios.post("http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/usuarios", {
                nome: name,
                email: email,
                senha: password,
                cpf
            })
            setMessage("");
            alert("Cadastro realizado");
            navigate("/login")
        } catch (error) {
            if(error.response && error.response.data && error.response.data.messages) {
                setMessage(error.response.data.messages[0]);
                return
            }
            setMessage("Erro desconhecido, tente novamente.");
        }
    }

    return(
        <ColorBody>
            <DivImg>
                <Logo src={LogoImage}/>
            </DivImg>
            <DivCard>
                <Card width={'50%'}> 
                    <DivTitles>
                        <Title>Cadastre-se</Title>
                        <Subtitle>É muito simples e fácil</Subtitle>
                    </DivTitles>
                    <DivInput>
                        <Input
                            onChange={handleChange(setName)}
                            value={name}
                            textInput='Nome completo'
                            width={'85%'} 
                            height={'8%'}
                        />
                           <Input
                            onChange={handleChange(setCpf)}
                            value={cpf}
                            textInput='CPF'
                            width={'85%'} 
                            height={'8%'}
                        />
                            <Input
                            onChange={handleChange(setEmail)}
                            value={email}
                            textInput='E-mail'
                            type="email"
                            width={'85%'} 
                            height={'8%'}
                        />
                           <Input
                            onChange={handleChange(setPhone)}
                            value={phone}
                            textInput='Telefone'
                            width={'85%'} 
                            height={'8%'}
                        />
                           <Input
                            onChange={handleChange(setAddress)}
                            value={address}
                            textInput='Endereço'
                            width={'85%'} 
                            height={'8%'}
                        />
                           <Input
                            type="password"
                            onChange={handleChange(setPassword)}
                            value={password}
                            textInput='Senha'
                            width={'85%'} 
                            height={'8%'}
                            />
                            <Input
                            type={"password"}
                            onChange={handleChange(setPasswordConfirmation)}
                            value={passwordConfirmation}
                            textInput='Confirme a senha'
                            width={'85%'} 
                            height={'8%'}
                        />
                    </DivInput>
                    <DivButton>
                        <Button
                            onClick={register} 
                            textButton='Cadastrar' 
                            width={'45%'} 
                            height={'25%'}
                        />
                    </DivButton>
                    { message.length > 0 && (<Message>{message}</Message>)}
                </Card>
            </DivCard>
        </ColorBody>
    )
}

export default Cadastro
