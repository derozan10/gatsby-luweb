import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

import Layout from '../components/Layout'
import Hero from '../components/Hero';
import Card from '../components/Card';
// import Succes from '../components/Succes';
// import CTA from '../components/CTA';
import SEO from '../components/SEO'
import Container from '../components/Container';

import design from '../img/design.svg';
import code from '../img/code.svg';
import speed from '../img/speed.svg';
import analytics from '../img/analytics.svg';


const StyledServices = styled.section`
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    background: linear-gradient(to bottom right, #fff 50%, #eaeaea);
    transform: rotate(-7deg);
    transform-origin: left top;
    left: -10%;
    height: 100%;
    width: 150%;
    z-index: -1;
}
  .serviceCards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media(max-width: 576px) {
      flex-direction: column;
      align-items: center;
    }
  }
`

const StyledFooterCta = styled.div`
    background-color: ${props => props.theme.colors.neutral.three};
    #footerCtaWrap {
      display: flex;
      justify-content: space-between;
      #footerCtaText{
        padding: 20px 0;
          h2 {
            font-size: 36px;
            margin-bottom: 30px;
          }
          p {
            color: ${props => props.theme.colors.neutral.eight};
            font-size: 24px;
          }
      }
      #footerCtaImage{
          /* position: relative; */
          transform: skewX(-30deg);
          width: 400px;
          height: 200px;
          background-color: pink;
      }

    }

`
const index = () => {
  return (
    <Layout>
      <SEO title="Web development is onze passie." />
      <Hero />
      <StyledServices>
        <Container>
          <h1>Wat we doen</h1>
          <Fade bottom cascade>
            <div className="serviceCards">
              <Link to="/diensten" style={{ textDecoration: "none" }}>
                <Card
                  icon={design}
                  title='Web design'
                  text='Een goede website vertrekt steeds van een sterk design. De website moet een mooi, gebruiksvriendelijk en functioneel geheel vormen.'
                />
              </Link>
              <Link to="/diensten" style={{ textDecoration: "none" }}>
                <Card
                  icon={code}
                  title='Web development'
                  text='We vertalen designs naar code, rekening houdend met alle hedendaagse devices. Hiervoor maken we uitsluitend gebruik van de nieuwste technologieeën.'
                />
              </Link>
              <Link to="/diensten" style={{ textDecoration: "none" }}>
                <Card
                  icon={speed}
                  title='Performance'
                  text='We geven je website een boost om een supersnelle laadtijd te bekomen. Hiedoor scoor je nog hoger in Google en verhoog je het gebruiksgemak van je website. '
                />
              </Link>
              <Link to="/diensten" style={{ textDecoration: "none" }}>
                <Card
                  icon={analytics}
                  title='Analytics'
                  text='We helpen je inzichten te krijgen in je bezoekers zodat je strategische inzichten krijgt en hierop doorslaggevende beslissingen kan maken.'
                />
              </Link>
            </div>
          </Fade>
        </Container>
      </StyledServices>
      <Container>

        <h1>Zet je merk op de kaart</h1>
        <div>
          <div>
            <h3>Branding</h3>
            <p>Een uiterst zakelijke, formele website? Of liever net wat speels? Een website moet het imago van je bedrijf weerspiegelen. We trekken je huidige huisstijl door naar je site, of creëren er 1 voor jou.</p>
            <Link>Meer over branding</Link>
          </div>
          <div>
            <h3>Social Media</h3>
            <p>Sociale media is niet meer weg te denken uit ons dagdagelijkse leven en kan heel wat mogelijkheiden bieden voor ondernemingen. We kunnen de sociale media helpen opzetten en integreren in je website.</p>
            <Link>Meer over social</Link>
          </div>
          <div>
            <h3>Seo</h3>
            <p>Eens je een website hebt waar je 100% tevreden van bent, wil je uiteraard veel bezoekers. Hoog scoren in zoek- machines is dan een vereiste. We houden rekening met alle best-practices en optimaliseren je site zodat je meer kans maakt gevonden te worden.</p>
            <Link>Meer over SEO</Link>
          </div>
        </div>
      </Container>
      <StyledFooterCta>

        <Container>
          <div id="footerCtaWrap">
            <div id="footerCtaText">
              <h2>Samenwerken?</h2>
              <p>Aarzel niet om ons te contacteren voor een vrijblijvend gesprek</p>
            </div>
            <div id="footerCtaImage">
              <img src="https://www.source.unsplash.com/random" alt="random" />
            </div>
          </div>
        </Container>
      </StyledFooterCta>
    </Layout >
  )
}

export default index
