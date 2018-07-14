import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Navbar inverse />
                <Container>
                    <h1>Coming Soon...</h1>
                    <p>Voorlopig hebben we nog geen content op onze blog. <br />
                        Kom binnenkort zeker nog eens een kijkje nemen!</p>
                </Container>
                <Footer />
            </div>
        )
    }
}
