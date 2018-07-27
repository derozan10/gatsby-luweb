import React from 'react'
import Container from './Container'
import Card from './Card'
import Button from './Button'
import CardButton from './CardButton'
import Link from 'gatsby-link'
import styled from 'styled-components'
import waves from '../img/wave.png'
import responsive from '../img/responsive.png'
import shuttle from '../img/shuttle.png'
import key from '../img/key.png'
import pensilRuler from '../img/pensil-ruler.png'

const StyledCards = styled.div`
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
        <StyledCards>
            <section style={tarieven}>
                <Container >
                    <h2 style={{ color: '#fff', textAlign: 'center', margin: '5vh 0 10vh 0' }}>Web development met een sterke focus op</h2>
                    <div className="cardFlex">
                        <Card
                            title={'Responsive design'}
                            img={responsive}
                            altText={'device mockup'}
                            usps={['Laptop', 'Tablet', 'Smartphone', '...']}
                            btn={<CardButton text="ondek meer" link="/diensten" />}
                        />
                        <Card
                            title={'Performance'}
                            img={shuttle}
                            altText={'space shuttle'}
                            usps={['Snelle werking', 'korte laadtijd', 'alle nodige optimalisaties']}
                            btn={<CardButton text="ondek meer" link="/diensten" />}
                        />
                        <Card
                            title={'Veiligheid'}
                            img={key}
                            altText={'key'}
                            usps={['nieuwste technologiëen', 'correcte implementaties', 'met SSL encryptie']}
                            btn={<CardButton text="ondek meer" link="/diensten" />}
                        />
                        <Card
                            title={'Personalisatie'}
                            img={pensilRuler}
                            altText={'potlood en meetlat'}
                            usps={['volledig naar eigen smaak', '100% unieke website']}
                            btn={<CardButton text="ondek meer" link="/diensten" />}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0' }}>
                        <Link to='/diensten'>
                            <Button color='blue'>Meer info over onze websites</Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </StyledCards>
    )
}
