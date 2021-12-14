import React from "react";
import { Link } from 'react-router-dom'
import '../../assets/css/style.css'
import { FiLogOut } from "react-icons/fi";
import { useKeycloak } from '@react-keycloak/web'

const Menu = () => {
    const { keycloak, initialized } = useKeycloak()

    return(
        <nav className="app-menu">
            <ul className="app-menu__list">
                <li className="app-menu__item">
                    <Link onClick={(e) => {
                        e.preventDefault();
                        keycloak.logout({ redirectUri : "http://localhost:8000/" });
                    }}className="app-menu__link" to="/"><FiLogOut /> Sair </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu