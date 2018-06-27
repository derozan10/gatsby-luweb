import React from 'react';
import Link from "gatsby-link"
import Button from './button'
import Container from './Container';

export default () => {
    const hero = {
        color: '#fff',
        fontFamily: 'Segoe UI',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '40vh'
    }

    const linkStyle = {
        textDecoration: 'none',
        color: '#fff'
    }

    return (
        <Container>
            <section style={hero}>
                <h1>Web development is onze passie</h1>
                <p>Bij Luweb is uw online imago in goede handen</p>
                <Button color="green">
                    <Link to="/diensten/" style={linkStyle}>Onze diensten</Link>
                </Button>
                <Button color="blue">
                    <Link to="/contact/" style={linkStyle}>Contacteer ons</Link>
                </Button>
            </section>
        </Container>
    )
}
