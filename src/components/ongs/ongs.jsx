import React from 'react'
import Header from '../layouts/header'
import { CgOptions } from "react-icons/cg";
import Title from '../layouts/title';
import { Filter, Main, CategoryFilter, CategoryFilterSpan, Input } from './styled';

function Ongs() { 
    return(
        <>
            <Header />
            <Main>
                <header>
                    <Title title={"Listagem de instituições cadastradas"}/>
                    <Filter>
                        <CategoryFilter>
                            <CgOptions size={23} color="490D46" />
                            <CategoryFilterSpan>Filtrar por categoria</CategoryFilterSpan>
                        </CategoryFilter>
                        <div>
                            <Input placeholder="Buscar instituição por nome: " width="300px"/>
                        </div>
                    </Filter>
                </header>
            </Main>
        </>
    )
}

export default Ongs