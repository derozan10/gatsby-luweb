import React from 'react'
import Container from './Container'
import Tile from './Tile';
import Button from './Button'
import Link from 'gatsby-link'
import styled from 'styled-components'
import waves from '../img/wave.png'

const StyledTarieven = styled.div`
    ::after {
        content: '';
        height: 50px;
        width: 100vw;
        display: block;
        background-image: url(${ waves});
        background-position: top right;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        top: -45px
    }
}`

export default () => {
    const tarieven = {
        background: 'linear-gradient(to right top, #221C67, #00468F, #006DA9)',
        width: '100%',
        padding: '50px 0',
        position: 'relative'
    }
    return (
        <StyledTarieven>
            <section style={tarieven}>
                <Container >
                    <h2 style={{ color: '#fff' }}>Tarieven</h2>
                    <div className="tileFlex">
                        <Tile
                            title={'Updaten bestaande website'}
                            price={'€ 30'}
                            hourly={true}
                            usps={['performance optimalisatie', 'content aanpassingen', 'algemeen beheer website']}
                        />
                        <Tile
                            title={'Template website'}
                            price={'€ 249'}
                            usps={['responsive design', 'snel werkende website']}
                        />
                        <Tile
                            title={'Gepersonaliseerde website'}
                            price={'€ 499'}
                            usps={['website volledig op maat', 'hoogste performance']}
                        />
                        <Tile
                            title={'E-commerce website'}
                            price={'€ 599'}
                            usps={['verkoop producten', 'eigen CMS systeem']}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
                        <Link to='/diensten'>
                            <Button color='blue'>Meer info over onze websites</Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </StyledTarieven>
    )
}
