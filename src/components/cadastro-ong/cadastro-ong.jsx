import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import '../../assets/css/style.css'
import { ColorBodyWhite } from '../layouts/background-color'
import { Card } from '../layouts/card'
import  Header from '../layouts/header'
import Button from '../layouts/button'
import Input from './input'
import { FiUser, FiMail, FiPhone, FiMapPin, FiBriefcase } from "react-icons/fi";
import { handleChange } from '../../utils/handleChange';
import { DivImg, Subtitle, Title, DivButton, DivInput, DivTitles, DivCard, Select, OngImageContainer } from './styled'
import Footer from "../layouts/footer"
import img from "../../assets/img/ong1.png"

const Message = styled.p`
    padding: 5px;
`

const OngImgField = styled.input`
    display: none
`
function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

function CadastroOng() {
    const [ name, setName ] = useState("");
    const [ cnpj, setCnpj ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ ongImg, setOngImg ] = useState(null)
    const [ imgPreview, setImgPreview ] = useState(null)
    const [ message, setMessage ] = useState("");
    const inputRef = React.useRef(null);

    useEffect(() => {
        if(!ongImg) return;
        const updateImagePreview = async () => {
            setImgPreview(await getBase64(ongImg))
        }
        updateImagePreview();
    }, [ ongImg ]);

    return(
        <>
            <Header />
            <ColorBodyWhite>
                <DivImg>
                    <OngImageContainer>
                        <img src={imgPreview || img} />
                        <Button 
                            onClick={() => {
                                inputRef.current.click()
                            }} 
                            width={"170px"} 
                            textButton={"Upload de imagem"} 
                        ></Button>
                        <OngImgField onChange={(e) => {
                            setOngImg(e.target.files[0])
                        }} ref={inputRef} type="file" />
                    </OngImageContainer>
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
                        { message.length > 0 && (<Message>{message}</Message>)}
                    </Card>
                </DivCard>
            </ColorBodyWhite>
            <Footer />
        </>
    )
}

export default CadastroOng;
