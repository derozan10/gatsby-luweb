import React from 'react'
import Button from './Button';
import Container from '../components/Container';
import { Link } from "gatsby"

export default () => {
    const cta = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    return (
        <Container>
            <div style={cta}>
                <h2>Overtuigd van onze expertise?</h2>
                <p style={{ color: 'rgba(14,30,37,.6)' }}>Aarzel niet om ons te contacteren voor een vrijblijvend gesprek</p>
                <Link to="/contact" exact activeClassName="activeLink">
                    <Button color={'green'}>Contacteer ons</Button>
                </Link>
            </div>
        </Container>
    )
}
