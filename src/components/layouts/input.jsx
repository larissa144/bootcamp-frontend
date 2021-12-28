import styled from 'styled-components'
import React from 'react'

const InputLayout = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 10px;
    background: #ffffff;
    border-radius: 16px;
    text-align: center;
    border: none;
    margin-top: 10px;
    box-shadow: 1px 1px 6px 3px rgb(0 0 0 / 20%);
    text-align: left;
    ::placeholder {
       color: rgba(73, 13, 70, 0.51);
    }
   :focus {
    box-shadow: 1px 1px 6px 3px rgb(137 41 140 / 47%);
    outline: 0;
    }
`

const Input = ({type, textInput, value, width, height, onChange, icon: Icon}) =>  {
    return (
        <>
            {Icon &&<Icon size={23} color="490D46"/>}   
            <InputLayout type={type} value={value} width={width} height={height} placeholder={textInput} onChange={onChange}/>
        </>
    )
}

export default Input