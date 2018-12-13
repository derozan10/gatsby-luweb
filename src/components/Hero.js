import React from 'react';
import Link from "gatsby-link";
import Button from './Button';
// import Container from '../components/Container';
// import laptop from "../img/mac.svg"

import "../stylesheets/hero.sass"

export default () => {
    return (
        <header id="hero">
            <div id="hero_gradient">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="heroText">
                <h1>Web development is onze passie</h1>
                <p>Bij Luweb kan u terecht voor alles wat u nodig heeft om uw online verhaal tot een succes te maken. We zijn gespecialiseerd in uiterst performante websites, met een goed oog voor design.</p>
                <div>
                    <Link to="/diensten" >
                        <Button color="white">
                            Onze diensten
                            </Button>
                    </Link>
                    <Link to="/contact">
                        <Button color="blue">
                            Contacteer ons
                        </Button>
                    </Link>
                </div>
            </div>
            {/* <img id="laptop" src={laptop} alt="laptop" /> */}
        </header>
    )
}
