import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../layouts/Container';

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Navbar color={"inverse"} />
                <Container>
                    Luweb is fantastisch
                    </Container>
                <Footer />
            </div>
        )
    }
}
