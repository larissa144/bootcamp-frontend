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

    > li {
        width: 20px;
    }
`

function Pagination({ ongs }) {
    return (
        <PaginationUL>
            <li><FaAngleLeft size={23} color="#490D46" /></li>
            <li><IoEllipse size={23} color="#490D46" /></li>
            <li><FaAngleRight size={23} color="#490D46" /></li>
        </PaginationUL>
    );
}

export default Pagination;