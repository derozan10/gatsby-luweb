import React from 'react'
import Button from './Button';
import Container from '../components/Container';

export default () => {
    const cta = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '80px 0'
    }

    return (
        <Container>
            <div style={cta}>
                <h2>Overtuigd van onze expertise?</h2>
                <p style={{ color: 'grey' }}>Aarzel niet om ons te contacteren voor een vrijblijvend gesprek</p>
                <Button color={'green'}>Contacteer ons</Button>
            </div>
        </Container>
    )
}
