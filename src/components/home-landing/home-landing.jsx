import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LogoImage from '../../assets/img/logo-branco.png'

const Logo = styled.img`
  width: 40%;
  margin: 100px
`
const DivImg = styled.div`
  display: flex;
  margin-top: 40px;
  margin-right: 10%;
  justify-content: center;
  align-items: center;
`
const DivHeader = styled.div`
    display: flex;
    width: 100%;
    font-weight: 600;
    color: #f1f1f1;
    padding: 30px 60px;
    justify-content: space-between;
    align-items: center;
`
const StyleLink = styled(Link)`
    margin-right: 20px;
`

const LinkContainer = styled.div`
    display: flex;
    width: 165px;
    justify-content: space-around;

    > a {
        font-weight: 400;
        display: block
    }

    > a:hover {
        font-weight: bold
    }
`

const Backgroud = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(121.03deg, #440A67 38.95%, #6A1B7C 75.35%, #89298C 88.6%);
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

function HomeLanding() {
    return(
        <Backgroud>
          <DivHeader>
            <div> Bem vindo ao idonation</div>
        
            <LinkContainer>
              <StyleLink to="/cadastro">Cadastro</StyleLink>
              <Link to="/login">Login</Link>
            </LinkContainer>
          </DivHeader>
  
            <DivImg>
                <Logo src={LogoImage}/>
            </DivImg>
        </Backgroud>
    )
}

export default HomeLanding;
