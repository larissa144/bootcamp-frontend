import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoEllipse } from "react-icons/io5";
import styled from 'styled-components'

const PaginationUL = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 125px;
    margin: 0 30px 30px auto;

    > li.current {
        width: 20px;
        cursor: default 
    }
`

const PaginationButton = styled.li`
    width: 20px;
    cursor: pointer;
    transition: .4s ease;
    cursor: ${props => props.enable ? 'pointer' : 'default'};;
    
    :hover {
        transform: ${props => props.enable ? 'scale(1.5)' : 'scale(1)'};
    }
`

function Pagination({ page, setPage, hasNext, hasPrevious }) {
    return (
        <PaginationUL>
            <PaginationButton enable={hasPrevious}><FaAngleLeft size={23} color={!hasPrevious ? "#B4AEE8" : "#490D46"} /></PaginationButton>
            <li className="current"><IoEllipse size={23} color="#B4AEE8" /></li>
            <PaginationButton enable={hasNext}><FaAngleRight size={23} color={!hasNext ? "#B4AEE8" : "#490D46"} /></PaginationButton>
        </PaginationUL>
    );
}

export default Pagination;