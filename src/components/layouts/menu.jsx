import React from "react";
import { Link } from 'react-router-dom'
import '../../assets/css/style.css'
import { FiLogOut } from "react-icons/fi";
import { useKeycloak } from '@react-keycloak/web'
import OngAssociatedUser from "../ongs/OngUsers";


const Menu = () => {
    const { keycloak } = useKeycloak()

    return(
        <nav className="app-menu">
            <ul className="app-menu__list">
                <li className="app-menu__item">
                    <Link className="app-menu__link" to="/feed"> Início </Link>
                </li>
                <li className="app-menu__item">
                    <Link className="app-menu__link" to="/ongs"> Listagem de ong's </Link>
                </li>
                <li className="app-menu__item">
                    <Link className="app-menu__link" to="#"> Minhas ong's </Link>
                    <OngAssociatedUser />
                </li>
                <li className="app-menu__item">
                    <Link className="app-menu__link" to="/ongs/cadastro"> Cadastrar uma Ong </Link>
                </li>
                <li className="app-menu__item">
                    <Link onClick={(e) => {
                        e.preventDefault();
                        keycloak.logout({ redirectUri : `${ window.location.protocol || "http" }//${window.location.host}/`});
                    }}className="app-menu__link" to="/"><FiLogOut /> Sair </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu