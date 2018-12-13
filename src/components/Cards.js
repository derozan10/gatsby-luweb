import React from 'react'
import Container from './Container'
import Card from './Card'
import Button from './Button'
import Link from 'gatsby-link'
import styled from 'styled-components'
import waves from '../img/wave.png'
// import responsive from '../img/responsive.png'
// import CardButton from './CardButton'
// import shuttle from '../img/shuttle.png'
// import key from '../img/key.png'
// import pensilRuler from '../img/pensil-ruler.png'
import performance from '../img/performance.svg'
import personalization from '../img/personalization.svg'
import responsive from '../img/responsive.svg'
import safety from '../img/safety.svg'

const StyledCards = styled.div`
    ::after {
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
                    <h2 style={{ color: '#fff', textAlign: 'center', margin: '5vh 0 10vh 0' }}>Web development met een sterke focus op</h2>
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
