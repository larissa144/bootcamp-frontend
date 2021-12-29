import styled from 'styled-components'

const DivImg = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`
const DivCard = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
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
    background: #ffffff;
    border-radius: 16px;
    align-items: center;
    box-shadow: rgb(0 0 0 / 20%) 1px 1px 6px 3px;
    padding-left: 8px;
    width: 90%;
    margin: 6px 5%;
    height: 37px;
    border: none
`

export {
    DivImg,
    Subtitle,
    Title,
    DivButton,
    DivInput,
    DivTitles,
    DivCard,
    Select
}