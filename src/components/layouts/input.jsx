import styled from 'styled-components'
import React from 'react'

const InputLayout = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    background: #ffffff;
    color: rgb(169, 169, 169)	;
    border-radius: 12px;
    text-align: center;
    border: 1px solid rgba(80, 80, 80, 0.479);
    margin-top: 13px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: left;
`

const Input = ({textInput, width, height}) =>  {

    return (
        <>
        <InputLayout width={width} height={height} type='text' value={textInput}/>
        </>
    )
}

export default Input