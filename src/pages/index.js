import React from 'react'
import Link from 'gatsby-link'
import Button from '../components/button';
import laptopBG from '../img/mac.png';
import Navbar from '../components/Navbar';

const IndexPage = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: '#fff'
    }

    const hero = {
        color: '#fff',
        fontFamily: 'Segoe UI',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '40vh'
    }

    const gradient = {
        backgroundImage: `url(${laptopBG}), linear-gradient(to right top, #221C67, #00468F, #006DA9)`,
        backgroundSize: '60vw, 100%',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        backgroundPosition: 'top left, center',
        zIndex: '-1',
        height: '80vh',
        width: '150%',
        transform: 'rotate(-8deg)',
        top: '-12vw',
        left: '-15vw',
    }

    return (
        <div>
            <div style={gradient} />
            <Navbar />
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
        </div>
    )
}

export default IndexPage
