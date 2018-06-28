import React from 'react'
import RoundedButton from './RoundedButton';
import Container from '../layouts/Container';

import waves from '../img/wave.png'

export default () => {
    const cta = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '80px 0'
    }
    const wave = {
        padding: '50px',
        backgroundImage: `url(${waves})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        top: '-40px'
    }

    return (
        <div style={wave}>
            <Container>
                <div style={cta}>
                    <h2>Overtuigd van onze expertise?</h2>
                    <p style={{ color: 'grey' }}>Aarzel niet om ons te contacteren voor een vrijblijvend gesprek</p>
                    <RoundedButton>Contacteer ons</RoundedButton>
                </div>
            </Container>
        </div>
    )
}
