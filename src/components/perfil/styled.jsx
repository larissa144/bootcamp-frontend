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

const OngInfos = styled.div`
    display: flex;
    flex-wrap: wrap;

    > h4 {
        text-align: center;
        display: block;
        margin: 0 0 30px;
        width: 100%;
        font-size: 1.5em;
        font-weight: 400;
    }

    > span {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 1.1em;
        padding: 0 5px 15px;
        white-space: pre;
        overflow: hidden;
    }
    > span > svg {
        margin-right: 5px;
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
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
`

const SocialMediaListContainer = styled.ul`
    display: flex;
    flex-wrap: wrap
`
    
const SocialMediaListItemContainer = styled.li`
    display: flex;
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    line-height: 60px;
    color: rgb(0 0 0 / 48%);
`

const SocialMediaImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 5px 20px 5px 5px
`

export {
    SocialMediaImg,
    SocialMediaListContainer,
    SocialMediaListItemContainer,
    Main,
    PerfilContent,
    PerfilSocialMedias,
    Divisor,
    OngInfos,
    OngImgContainer,
    OngImg
}