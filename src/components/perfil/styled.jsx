import styled from 'styled-components'

const Main = styled.div`  
  text-align: center;
  margin-top: 30px;
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