import React from "react";
import { Link } from 'react-router-dom'

function LandingPage() {
    return(
        <div>
            Bem vindo ao idonation
            <br />
            <Link to="/cadastro">Cadastro</Link>
            <br />
            <Link to="/login">Login</Link>
        </div>
    )
}

export default LandingPage;
