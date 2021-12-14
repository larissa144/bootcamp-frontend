import React, { useEffect, useState } from 'react';
import Menu from "../layouts/menu";
import '../../assets/css/style.css';
import Wellcome from './wellcome';
import { useKeycloak } from '@react-keycloak/web';
import axios from 'axios';

const Header = () => {
    const { keycloak, initialized } = useKeycloak()
    const [ name, setName ] = useState("");
    const [ profileImage, setProfileImage ] = useState("");

    useEffect(() => {
        if(initialized) {
            setName(keycloak.tokenParsed.name)
        }
    }, [ initialized ]);

    return(
        <header className="app-header">
            <Wellcome name={name} profileImage={profileImage}/>
            <Menu />
        </header>
    )
}

export default Header