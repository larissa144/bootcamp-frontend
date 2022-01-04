import styled from 'styled-components'

const DivImg = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0;
`
const DivCard = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`

const Card = styled.div`
    margin: 20px 0;
    width: ${props => props.width};
    height: ${props => props.height};
    background: #FFFFFF;
    border-radius: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    display: flex;
    padding: 30px 0;
    box-shadow: rgb(0 0 0 / 20%) 1px 1px 6px 3px;
`

const OngImageContainer = styled.div`
    width: 50%;
    text-align: center;
    justify-content: center;
    > img {
        width: 70%;
        margin-bottom: 20px;
    }
`
const DivTitles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
`
const DivInput = styled.div`
    margin-bottom: auto;
    flex-direction: column;
    display: flex;
    width: 100%;
`  
const DivButton = styled.div`
    margin-bottom: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 20%;
`
const Title = styled.p`
    color: #5A5657;
    font-size: 20px;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
`

const Subtitle = styled.p`
    color: #5A5657;
    font-size: 15px;
    margin-top: 2px;
`

const Select = styled.select`
    background: white;
    border-radius: 16px;
    align-items: center;
    box-shadow: rgb(0 0 0 / 20%) 1px 1px 6px 3px;
    padding-left: 8px;
    width: 90%;
    margin: 6px 5%;
    height: 37px;
    border: none;
    cursor: pointer
`

const Message = styled.p`
    padding: 5px;
`

const SubtitleSocialMedia = styled.p`
    padding: 5px;
    color: #5A5657;
    font-size: 15px;
    text-align: center;
`

const OngImgField = styled.input`
    display: none
`

export {
    Message,
    SubtitleSocialMedia,
    OngImgField,
    DivImg,
    Subtitle,
    Title,
    DivButton,
    DivInput,
    DivTitles,
    DivCard,
    Select,
    Card,
    OngImageContainer
}