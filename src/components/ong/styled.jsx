import styled from 'styled-components'
import React from 'react'

const InputLayout = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 14px 10px;
    border: 0px solid;
    text-align: left;
    ::placeholder {
       color: rgba(73, 13, 70, 0.51);
    }
    :focus {
        outline: 0;
    }
`

const InputContainer = styled.div`
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid rgba(73, 13, 70, 0.51);
    display: flex;
    align-items: center;
    margin-top: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-left: 8px;
`

const Input = ({textInput, width, height, onChange, icon: Icon, ... repeatInput}) =>  {

    return (
        <>
            <InputContainer>
                {Icon &&<Icon size={23} color="490D46"/>}   
                <InputLayout {... repeatInput} width={width} height={height} type='text' placeholder={textInput} onChange={onChange} />
            </InputContainer>
        </>
    )
}

export default Input