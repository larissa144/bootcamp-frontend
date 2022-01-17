import styled from 'styled-components'

export const Card = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background: #FFFFFF;
    border-radius: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    display: flex;
    padding: 30px 0;
`