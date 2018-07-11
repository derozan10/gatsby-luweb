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
                    Luweb is fantastisch
                    </Container>
                <Footer />
            </div>
        )
    }
}
