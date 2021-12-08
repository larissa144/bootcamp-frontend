import styled from 'styled-components'
import React from 'react'

const StyledFooter = styled.footer`
    height: 50px;
    width: 100%;
    color: white;
    line-height: 50px;
    padding: 0 20px;
    background-color: #440A67;
    font-size: .9em;
`

function Footer() {
    return (
        <StyledFooter>
            ©2021 - Idonation | Direitos reservados
        </StyledFooter>
    )
}

export default Footer