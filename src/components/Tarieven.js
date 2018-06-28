import React from 'react'
import Container from '../layouts/Container'
import Tile from './Tile';
import RoundedButton from './RoundedButton'

export default () => {
    const tarieven = {
        background: 'linear-gradient(to right top, #221C67, #00468F, #006DA9)',
        padding: '20px',
        width: '100vw'
    }
    return (
        <section style={tarieven}>
            <Container >
                <h2 style={{ color: '#fff' }}>Tarieven</h2>
                <div className="tileFlex">
                    <Tile
                        title={'updaten bestaande website'}
                        price={'€ 30'}
                        hourly={true}
                        usps={['performance optimalisatie', 'content aanpassingen', 'algemeen beheer website']}
                    />
                    <Tile
                        title={'updaten bestaande website'}
                        price={'€ 249'}
                        usps={['performance optimalisatie', 'content aanpassingen', 'algemeen beheer website']}
                    />
                    <Tile
                        title={'updaten bestaande website'}
                        price={'€ 499'}
                        usps={['performance optimalisatie', 'content aanpassingen', 'algemeen beheer website']}
                    />
                    <Tile
                        title={'updaten bestaande website'}
                        price={'€ 599'}
                        usps={['performance optimalisatie', 'content aanpassingen', 'algemeen beheer website']}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
                    <RoundedButton>Meer info over onze websites</RoundedButton>
                </div>
            </Container>
        </section>
    )
}
