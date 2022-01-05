import React from 'react'
import styled from 'styled-components'
import Button from './button'

const TxtAreaDiv = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`
const TextArea = styled.textarea`
    width: 30%;
    height: 50px;
    font-weight: 300;
    font-size: 14px;
    color: #6A676A;
`

const TextAreaComponent = () => {

    return(
        <TxtAreaDiv>
            <TextArea placeholder='Que tal publicar algo hoje?' name='publiTextArea'/> 
            <Button 
              textButton='publicar' 
              width={'6%'}
            />
        </TxtAreaDiv>
    )
}

export default TextAreaComponent