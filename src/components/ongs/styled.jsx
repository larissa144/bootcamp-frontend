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
    transition: .4s ease;
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
    box-shadow: 1px 1px 6px 3px rgb(137 41 140 / 47%);
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
    transition: .4s ease; 
    cursor: pointer
` 

const OngsUl = styled.ul`
    display: flex;
    justify-content: space-around;
    margin: 50px 0;
    flex-wrap: wrap
`

const OngLi = styled.li`
    list-style-type: none;
    width: 325px;
    border-radius: 30px;
    box-shadow: 1px 1px 5px 2px #c7bfbf;
    padding: 25px 25px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 50px;

    > span {
        display: block;
        width: 100%;
        text-align: center;
        font-size: 1.1em;
        padding: 0 5px 20px;
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

    > a {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`
const OngImg = styled.img`
    max-width: 90%;
    max-height: 200px;
    border-radius: 50%;
`

export { Main, Filter, CategoryFilter, CategoryFilterSpan, Input, OngImgContainer, NameFilter, SelectFilter, OngImg, OngsUl, OngLi }