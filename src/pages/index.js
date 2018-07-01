import React from 'react'

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Succes from '../components/Succes';
import Tarieven from '../components/Tarieven';
import Footer from '../components/Footer'

import './index.css'
import CTA from '../components/CTA';

const IndexPage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Succes />
            <Tarieven />
            <CTA />
            <Footer />
        </div>
    )
}

export default IndexPage
