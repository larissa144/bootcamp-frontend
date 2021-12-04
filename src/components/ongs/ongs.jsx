import React, { useState } from 'react';
import Header from '../layouts/header'
import { CgOptions } from "react-icons/cg";
import Title from '../layouts/title';
import { Filter, Main, CategoryFilter, CategoryFilterSpan, Input, NameFilter, SelectFilter } from './styled';
import { FiSearch } from "react-icons/fi";

function Ongs() { 
    const [showCategories, setShowCategories] = useState(false);

    return(
        <>
            <Header />
            <Main>
                <header>
                    <Title title={"Listagem de instituições cadastradas"}/>
                    <Filter>
                        <CategoryFilter onClick={() => {
                            setShowCategories(!showCategories)
                        }} active={showCategories}>
                            <CgOptions size={23} color={showCategories ? "white" : "490D46"} />
                            <CategoryFilterSpan>Filtrar por categoria</CategoryFilterSpan>
                        </CategoryFilter>
                        <SelectFilter multiple={true} show={showCategories}>
                            <option>Animais</option>
                            <option>Racismo</option>
                            <option>Educação</option>
                            <option>LGBT</option>
                        </SelectFilter>
                        <NameFilter>
                            <Input placeholder="Buscar por nome" width="300px"/>
                            <FiSearch size={23} color="490D46" style={{
                                position: "absolute",
                                top: "5px",
                                right: "8px",
                                cursor: 'pointer'
                            }}/>
                        </NameFilter>
                    </Filter>
                </header>
            </Main>
        </>
    )
}

export default Ongs