import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import HousesContainer from '../components/HousesContainer';

export const Houses = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="single family house" subtitile="starting from $1,000.000">
                <Link to="/" className="btn-primary">return home</Link>
            </Banner>
        </Hero>
        <HousesContainer />
        </>
    )
}

export default Houses