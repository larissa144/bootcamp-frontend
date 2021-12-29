import React, { useState } from 'react'
import '../../assets/css/style.css'
import { ColorBodyWhite } from '../layouts/background-color'
import { Card } from '../layouts/card'
import  Header from '../layouts/header'
import Button from '../layouts/button'
import Input from './input'
import { FiUser, FiMail, FiPhone, FiMapPin, FiBriefcase } from "react-icons/fi";
import { handleChange } from '../../utils/handleChange';
import { DivImg, Subtitle, Title, DivButton, DivInput, DivTitles, DivCard, Select } from './styled'
import Footer from "../layouts/footer"
function CadastroOng() {
    const [ name, setName ] = useState("");
    const [ cnpj, setCnpj ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ category, setCategory ] = useState("");

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
                                value={name}
                                onChange={handleChange(setName)}
                                icon={FiUser}
                                textInput='Nome da ONG'
                                width={'85%'} 
                                height={'8%'}
                            />
                            <Input
                                value={cnpj}
                                onChange={handleChange(setCnpj)}
                                icon={FiBriefcase}
                                textInput='CNPJ'
                                width={'85%'} 
                                height={'8%'}
                            />
                            <Input
                                value={email}
                                onChange={handleChange(setEmail)}
                                icon={FiMail}
                                textInput='E-mail'
                                width={'85%'} 
                                height={'8%'}
                            />
                            <Input
                                value={phone}
                                onChange={handleChange(setPhone)}
                                icon={FiPhone}
                                textInput='Telefone'
                                width={'85%'} 
                                height={'8%'}
                            />
                            <Input
                                value={address}
                                onChange={handleChange(setAddress)}
                                icon={FiMapPin}
                                textInput='Endereço'
                                width={'85%'} 
                                height={'8%'}
                            />
                            <Select value={category} onChange={handleChange(setCategory)}>
                                <option value="" disabled>Selecione uma categoria</option>
                            </Select>
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
            <Footer />
        </>
    )
}

export default CadastroOng;
