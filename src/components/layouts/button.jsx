import styled from 'styled-components'
import React from 'react'

const ButtonLayout = styled.button`
    width: ${props => props.width};
    background: ${props => props.active ? '#B4AEE8' : '#440A67'};
    color: #f1f1f1;
    border: none;
    border-radius: 20px;
    margin-top: 20px;
    text-align: center;
    cursor: pointer;
    padding: 10px 0px;
    transition: .3s;

    :hover {
        background: ${props => props.active ? '#440A67' : '#B4AEE8'};
    }
`

const Button = ({textButton, width, height, active, onClick}) =>  {
    return (
        <ButtonLayout onClick={onClick} width={width} height={height} active={active}>{textButton}</ButtonLayout>
    )
}

export default Button