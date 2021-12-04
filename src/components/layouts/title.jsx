import React from 'react'
import styled from 'styled-components'

const TitleDiv = styled.div`
    display: flex;
    padding: 40px 0;
` 

const TitleH1 = styled.div`
    font-weight: normal;
    font-size: 1.5rem
` 

function Title({ title }) { 
    return(
        <TitleDiv>
            <TitleH1>{title}</TitleH1>
        </TitleDiv>
    )
}

export default Title