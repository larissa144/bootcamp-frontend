import React from "react";
import { Link } from 'react-router-dom'
import '../../assets/css/style.css'

const Menu = () => {
    return(
        <nav class="app-menu">
            <ul className="app-menu__list">
                <li className="app-menu__item">
                    <Link className="app-menu__link" to="/">
                        Sair
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu