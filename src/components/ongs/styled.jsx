import styled from 'styled-components'
import React from 'react'

const Main = styled.main`
    padding: 0 3rem;
`

const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    flex-wrap: wrap
    `
    
const CategoryFilter = styled.div`
    display: flex;
    border-radius: 20px;
    cursor: pointer;
    padding: 6px 10px;
    height: 35px;
    width: 220px;
    background: ${props => props.active ? "linear-gradient(121.03deg, #440A67 38.95%, #6A1B7C 75.35%, #89298C 88.6%)" : "none"};
    color: ${props => props.active ? "white" : "black"}
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
    height: 35px;
    background: #ffffff;
    border-radius: 20px;
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

const NameFilter = styled.div`
    position: relative;
`

const SelectFilter = styled.select`
    width: 220px;
    font-size: 1em;
    opacity: ${props => props.show ? "100%" : "0"};
    visibility: ${props => props.show ? "visible" : "hidden"};
    position: absolute;
    top: 40px;
` 

export { Main, Filter, CategoryFilter, CategoryFilterSpan, Input, NameFilter, SelectFilter }