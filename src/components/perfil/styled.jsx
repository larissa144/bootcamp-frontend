import styled from 'styled-components'

const Main = styled.div`  
  display: flex;
  padding: 40px;
  min-height: 100vh;
  position: relative;
`
  
const PerfilContent = styled.div`  
  width: 50% ;
`
  
const PerfilSocialMedias = styled.div`  
  width: 50%;
`
  
const Divisor = styled.div`
   top: 40px;
   border-left: 1px solid #0000003b;
   height: 440px;
   position: absolute;
   left: 50%;
`

const OngInfos = styled.li`
    display: flex;
    flex-wrap: wrap;

    > span {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 1.1em;
        padding: 0 5px 15px;
        white-space: pre;
        overflow: hidden;
    }
`

const OngImgContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 250px;
    padding: 10px 0;
`

const OngImg = styled.img`
    max-width: 90%;
    max-height: 200px;
    height: 230px;
`

const OngImgMidiaContent = styled.div`
    aling-items: center;

`

const OngLi = styled.div`
    align-items: center;
    margin-bottom: 40px;  
`

const OngImgMidiaContainer = styled.div`
`

const OngImgMidia = styled.img`
    max-height: 40px;
`

export {
  Main,
  PerfilContent,
  PerfilSocialMedias,
  Divisor,
  OngInfos,
  OngImgContainer,
  OngImg,
  OngImgMidiaContent,
  OngImgMidiaContainer,
  OngImgMidia,
  OngLi
}