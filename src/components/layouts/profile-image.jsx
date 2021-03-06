import styled from 'styled-components'
import React from 'react'
import profile from "../../assets/img/why-not.jpg"

const Img = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`

const ProfileImage = ( {img} ) =>{
  return(
    <Img src={img} />
  )
}

export default ProfileImage