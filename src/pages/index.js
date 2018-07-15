import React, { Component } from 'react'

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Succes from '../components/Succes';
import Tarieven from '../components/Tarieven';
import Footer from '../components/Footer'

import './index.css'
import CTA from '../components/CTA';
import Backdrop from '../components/Backdrop';

export default class IndexPage extends Component {
    state = {
        backdropActive: false
    }

    render() {
        console.log(this.state.backdropActive)
        return (
            <div>
                <Backdrop active={this.state.backdropActive} />
                <Navbar backdropHandler={() => this.setState({ backdropActive: !this.state.backdropActive })} />
                <Hero />
                <Succes />
                <Tarieven />
                <CTA />
                <Footer />
            </div>
        )
    }
}
