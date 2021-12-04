import styled from 'styled-components'
import React from 'react'

const Main = styled.main`
    padding: 0 3rem;
`

const Filter = styled.div`
    display: flex;
    justify-content: space-between;
`

const CategoryFilter = styled.div`
    display: flex;
    cursor: pointer
`

const CategoryFilterSpan = styled.span`
    display: block;
    margin: 0 10px;
    line-height: 22px;
`

const Input = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 8px 10px;
    background: #ffffff;
    border-radius: 12px;
    text-align: center;
    border: 1px solid rgba(73, 13, 70, 0.51);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: left;
    ::placeholder {
       color: rgba(73, 13, 70, 0.51);
    }
   :focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: 0;
    }
`

export { Main, Filter, CategoryFilter, CategoryFilterSpan, Input }