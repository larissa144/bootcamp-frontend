import React, { useState } from 'react'
import Menu from "../layouts/menu"
import '../../assets/css/style.css'
import Wellcome from './wellcome'
import { getAuthData } from "../../utils/authenticate";


const Header = () =>{
    const [ authData, setAuthData ] = useState(getAuthData());

    return(
        <header className="app-header">
            <Wellcome name={authData.tokenParsed.preferred_username}/>
            <Menu />
        </header>
    )
}

export default Header