import React, { Component } from 'react'

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Succes from '../components/Succes';
import Cards from '../components/Cards';
import Footer from '../components/Footer'

import './index.css'
import CTA from '../components/CTA';
import Backdrop from '../components/Backdrop';

export default class IndexPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Hero />
                <Succes />
                <Cards />
                <CTA />
                <Footer />
            </div>
        )
    }
}
