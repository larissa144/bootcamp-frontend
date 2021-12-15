import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LogoImage from '../../assets/img/logo-branco.png'

const Logo = styled.img`
  width: 40%;
`
const DivImg = styled.div`
  display: flex;
  margin-top: 12%;
  margin-right: 10%;
  justify-content: center;
  align-items: center;
`
const DivHeader = styled.div`
    display: flex;
    width: 100%;
    font-weight: 600;
    color: #ffffff;
    padding: 30px;
    justify-content: space-between;
    align-items: center;
`
const StyleLink = styled(Link)`
    margin-right: 20px;
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
        
            <div>
              <StyleLink to="/cadastro">Cadastro</StyleLink>
              <Link to="/login">Login</Link>
            </div>
          </DivHeader>
  
            <DivImg>
                <Logo src={LogoImage}/>
            </DivImg>
        </Backgroud>
    )
}

export default HomeLanding;
