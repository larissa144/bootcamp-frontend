import React, { useEffect, useState } from 'react';
import Menu from "../layouts/menu";
import '../../assets/css/style.css';
import Wellcome from './wellcome';

const Header = () => {
    

    return(
        <header className="app-header">
            <Wellcome />
            <Menu />
        </header>
    )
}

export default Header