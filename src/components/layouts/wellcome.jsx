import styled from 'styled-components'
import React from 'react'

import ProfileImage from './profile-image'

const WellcomeDiv = styled.div`
    display: flex;
`

const Span = styled.span`
    color: white;
    line-height: 60px;
    display: block;
    padding: 0 20px;
`

const Wellcome = () =>{
  return(
    <WellcomeDiv>
        <ProfileImage />
        <Span>Bem vindo, Fulano</Span>
    </WellcomeDiv>
  )
}

export default Wellcome