import React, { useState, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";
import { CgOptions } from "react-icons/cg";
import { Filter, CategoryFilter, CategoryFilterSpan, Input, NameFilter, SelectFilter } from './styled';
import { useKeycloak } from '@react-keycloak/web'
import axios from "axios"

function Filters({ category, setCategory, searchName, setSearchName, page, setPage }) {
    const [ showCategories, setShowCategories ] = useState(false);
    const [ categories, setCategories ] = useState([]);
    const { keycloak, initialized } = useKeycloak();

    useEffect(async () => {
        if(initialized) {
            const result = await axios.get("http://ec2-3-17-26-83.us-east-2.compute.amazonaws.com:8080/categorias", {
                headers: {
                    Authorization: "Bearer " + keycloak.token
                },
            });
            setCategories(result.data.content)
        }
    }, [ initialized ]);

    useEffect(async () => {
        setPage(1)
    }, [ categories, searchName ]);

    return (
        <Filter>
            <CategoryFilter onClick={() => {
                setCategory("")
                setShowCategories(!showCategories)
            }} active={showCategories}>
                <CgOptions size={23} color={showCategories ? "white" : "490D46"} />
                <CategoryFilterSpan>Filtrar por categoria</CategoryFilterSpan>
            </CategoryFilter>
            <SelectFilter value={category} show={showCategories} onChange={(e) => {
                    setCategory(e.target.value)
                }}>
                <option value="" disabled>Selecione uma categoria</option>
                { categories.map(item => (<option key={item.nome} value={item.nome}>{item.nome}</option>)) }
            </SelectFilter>
            <NameFilter>
                <Input placeholder="Buscar por nome" width="300px" value={searchName} onChange={(e) => {
                    setSearchName(e.target.value)
                }}/>
                <FiSearch size={23} color="490D46" style={{
                    position: "absolute",
                    top: "5px",
                    right: "8px",
                    cursor: 'pointer'
                }} />
            </NameFilter>
        </Filter>
    );
}

export default Filters;