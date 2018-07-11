import React from 'react'
import Button from './Button';
import Container from '../components/Container';

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
        backgroundImage: `url(${waves})`,
        backgroundSize: '100%',
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
                    <Button color={'green'}>Contacteer ons</Button>
                </div>
            </Container>
        </div>
    )
}
