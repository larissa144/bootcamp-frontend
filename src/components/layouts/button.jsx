import styled from 'styled-components'
import React from 'react'

const ButtonLayout = styled.button`
    width: ${props => props.width};
    background: ${props => props.active ? '#B4AEE8' : '#440A67'};
    color: #ffffff;
    border: none;
    border-radius: 20px;
    margin-top: 13px;
    text-align: center;
    cursor: pointer;
    padding: 10px 0px;
    transition: .4s ease;
`

const Button = ({textButton, width, height, active, onClick}) =>  {
    return (
        <ButtonLayout onClick={onClick} width={width} height={height} active={active}>{textButton}</ButtonLayout>
    )
}

export default Button