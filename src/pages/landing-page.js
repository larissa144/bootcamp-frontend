import React from "react"
import HomeLanding from '../components/home-landing/home-landing'
import AboutUsLanding from '../components/about-us/about-us'
import OurTeam from '../components/our-team/our-team'
import Footer from '../components/layouts/footer'

function LandingPage() {
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