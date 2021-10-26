import styled from 'styled-components'

export const Card = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    background: #FFFFFF;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    display: flex;
    padding: 12px;
`