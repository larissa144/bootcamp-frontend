import React from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoEllipse } from "react-icons/io5";
import styled from 'styled-components'

const PaginationUL = styled.ul`
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: center;
    margin: 40px 0;


    > li.current {
        width: 50px;
        cursor: default 
    }
`

const PaginationButton = styled.li`
    width: 50px;
    cursor: pointer;
    transition: .3s ease;
    cursor: ${props => props.enable ? 'pointer' : 'default'};;
    
    :hover {
        transform: ${props => props.enable ? 'scale(1.3)' : 'scale(1)'};
    }
`

function Pagination({ page, setPage, hasNext, hasPrevious }) {
    const next = () => {
        if(hasNext) {
            console.log("Going to next");
            setPage(page + 1);
        }
    }
    
    const previous = () => {
        if(hasPrevious) {
            console.log("Going to previous");
            setPage(page - 1);
        }
    }

    return (
        <PaginationUL>
            <PaginationButton onClick={previous} enable={hasPrevious}><FaAngleLeft size={40} color={!hasPrevious ? "#B4AEE8" : "#490D46"} /></PaginationButton>
            <li className="current"><IoEllipse size={40} color="#B4AEE8" /></li>
            <PaginationButton onClick={next} enable={hasNext}><FaAngleRight size={40} color={!hasNext ? "#B4AEE8" : "#490D46"} /></PaginationButton>
        </PaginationUL>
    );
}

export default Pagination;