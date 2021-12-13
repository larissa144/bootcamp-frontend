import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { CgOptions } from "react-icons/cg";
import { Filter, CategoryFilter, CategoryFilterSpan, Input, NameFilter, SelectFilter } from './styled';

function Filters({ categories, setCategories, searchName, setSearchName }) {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <Filter>
            <CategoryFilter onClick={() => {
                setShowCategories(!showCategories)
            }} active={showCategories}>
                <CgOptions size={23} color={showCategories ? "white" : "490D46"} />
                <CategoryFilterSpan>Filtrar por categoria</CategoryFilterSpan>
            </CategoryFilter>
            <SelectFilter show={showCategories}>
                <option>Animais</option>
                <option>Racismo</option>
                <option>Educação</option>
                <option>LGBT</option>
            </SelectFilter>
            <NameFilter>
                <Input placeholder="Buscar por nome" width="300px" />
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