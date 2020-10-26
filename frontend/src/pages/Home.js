import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeatureHouses from '../components/FeatureHouses';

export const Home = () => {
    return (
        <>
        <Hero>
            <Banner title="house" subtitile="Bay Area">
                <Link to="/houses" className="btn-primary">
                    check for available houses!
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeatureHouses />
        </>
    )
}

export default Home