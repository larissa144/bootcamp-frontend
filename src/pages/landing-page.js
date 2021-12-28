import React, { useEffect, useState } from "react"
import HomeLanding from '../components/home-landing/home-landing'
import AboutUsLanding from '../components/about-us/about-us'
import OurTeam from '../components/our-team/our-team'
import Footer from '../components/layouts/footer'
import { Navigate } from 'react-router';
import { useKeycloak } from '@react-keycloak/web'

function LandingPage() {
    const { keycloak, initialized } = useKeycloak();

    const [ auth, setAuth ] = useState(false);

    useEffect(() => {
        setAuth(keycloak.authenticated);
    }, [ initialized, keycloak.authenticated ])

    if(auth) {
        return (
            <Navigate to="/feed" />
        )
    }

    return(
        <>
        <HomeLanding />
        <AboutUsLanding />
        <OurTeam />
        <Footer />
        </>
    )
}

export default LandingPage