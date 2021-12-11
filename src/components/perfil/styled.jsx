import styled from 'styled-components'

const Main = styled.div`  
  text-align: center;
  margin-top: 30px ;
`

const PerfilContent = styled.div`  
  float: left;
  width: 50% ;
`

const PerfilSocialMedias = styled.div`  
  float: right;
  width: 50%;
`

const Divisor = styled.div`
  border-left: 1px solid black;
  height: 80%;
  position: absolute;
  left: 50%;
`

export { Main, PerfilContent, PerfilSocialMedias, Divisor }