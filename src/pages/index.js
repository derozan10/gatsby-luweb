import React from 'react'

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Succes from '../components/Succes';
import Tarieven from '../components/Tarieven';

import './index.css'

const IndexPage = () => {
    return (
        <div>
            <div className='heroGradient' />
            <Navbar />
            <Hero />
            <Succes />
            <Tarieven />
        </div>
    )
}

export default IndexPage
