import React from "react";
import { Link } from 'react-router-dom'
import '../../assets/css/style.css'
import { FiLogOut } from "react-icons/fi";
import { logout } from '../../utils/authenticate';

const Menu = () => {
    return(
        <nav class="app-menu">
            <ul className="app-menu__list">
                <li className="app-menu__item">
                    <Link onClick={(e) => {
                        e.preventDefault();
                        logout();
                    }}className="app-menu__link" to="/"><FiLogOut /> Sair </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu