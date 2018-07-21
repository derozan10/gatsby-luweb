import React from 'react'
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Footer from '../components/Footer';

export default () => {
    return (
        <div>
            <Navbar inverse />
            <Container >
                Bedankt voor jouw bericht.<br />
                We contacteren je zo spoedig mogelijk!
            </Container>
            <Footer />
        </div>
    )
}
