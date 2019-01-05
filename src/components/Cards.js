import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

import Button from './Button'
import Card from './Card'
import Container from './Container'
import waves from '../img/wave.png'
import performance from '../img/performance.svg'
import personalization from '../img/personalization.svg'
import responsive from '../img/responsive.svg'
import safety from '../img/safety.svg'

const StyledCards = styled.div`
h2 {
    color: #fff;
    text-align: center;
    margin: 5vh 0 10vh 0;
}
.cardFlex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    @media(max-width: 576px) {
        flex-direction: column;
        align-items: center;
    }
    .card {
        width: 45%;
        border-radius: 3px;
        background-color: #fff;
        margin-bottom: 20px;
        box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);
        font-size: 17px;
        padding: 20px;
        height: 240px;
        @media(max-width: 576px) {
            width: 100%;
            display: flex;
            flex-direction: column;
            height: auto;
            align-items: center;
        }
        h3 {
            font-size: 17px;
            text-transform: uppercase;
            @media(max-width: 576px) {
                text-align: center;
            }
        }
        p {
            margin-bottom: 0px;
        }
        .cardImage {
            height: auto;
            width: 100px;
            position: absolute;
            @media(max-width: 576px) {
                position: relative;
            }
            img {
                width: 200px;
            }
        }
        .cardText {
            padding: 10px 10px 10px 120px;
            color: #6F787C;
            @media(max-width: 576px) {
                padding: 0
            }
        }
        .cardTitle {
            font-weight: bold;
        }
    }
}
&:after {
        content: '';
        height: 50px;
        width: 100vw;
        display: block;
        background-image: url(${waves});
        background-position: top right;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        top: -45px
    }
`

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
                    <h2>Web development met een sterke focus op</h2>
                    <div className="cardFlex">
                        <Card
                            img={responsive}
                            titleColor="#3360A6"
                            title='Responsive design'
                            text='Een responsive website is een website die er goed uitziet op alle schermen. Je kan er vanuit gaan dat al onze websites mooi schalen op elke toestel. Of het nu om een smartphone, tablet, laptop of desktop gaat.'
                        />
                        <Card
                            img={performance}
                            titleColor="#A61308"
                            title='Performantie'
                            text='We zorgen steeds voor de meest performante oplossing voor jouw type website. Door gebruik te maken van de nieuwste technologieën, zal jouw website razendsnel zijn. Hierdoor verhoog je conversie, SEO, gebruiksgemak...'
                        />
                        <Card
                            img={safety}
                            titleColor="#4D870D"
                            title='Veiligheid'
                            text='We begrijpen maar al te goed dat een veilige website van het grootste belang is. Wees gerust, we zorgen ervoor dat elke website voldoende beveiligd wordt.'
                        />
                        <Card
                            img={personalization}
                            titleColor="#6321AE"
                            title='Personalisatie'
                            text='Heb je niet voldoende aan de zoveelste WordPress-template? Wil je een uniek design? Ook hiervoor ben je bij Luweb aan het juiste adres. We creëren een website volledig op maat en maken jouw ideeën realiteit.'
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
