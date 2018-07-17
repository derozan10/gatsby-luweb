import React from 'react';
import Link from "gatsby-link"
import Button from './Button'
import Container from '../components/Container';
import mac from '../img/mac.png'

export default () => {
    const hero = {
        position: 'relative',
        top: '-90px',
        height: '80vh',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'flex-start',
        color: '#fff',
        fontFamily: 'Segoe UI',
        display: 'flex',
        backgroundImage: `url(${mac}), linear-gradient(to right top, #221C67, #00468F, #006DA9)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left, center',
    }

    const linkStyle = {
        textDecoration: 'none',
        color: '#fff'
    }

    return (
        <section style={hero}>
            <Container>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 style={{ fontSize: '1.8rem' }}>Web development is onze passie</h1>
                    <p>Bij Luweb is uw online imago in goede handen</p>
                    <div>
                        <Button color="green">
                            <Link to="/diensten" style={linkStyle}>Onze diensten</Link>
                        </Button>
                        <Button color="blue">
                            <Link to="/contact" style={linkStyle}>Contacteer ons</Link>
                        </Button>
                    </div>
                </div>
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '-1px', width: '100vw', height: '10vw' }}>
                <polygon fill="white" points="0,100 100,0 100,100" />
            </svg>
        </section>
    )
}
