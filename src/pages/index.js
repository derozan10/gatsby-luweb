import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

import Layout from '../components/Layout'
import Hero from '../components/Hero';
import Card from '../components/Card';
import LinkUnderlined from '../components/LinkUnderlined'
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
    margin: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    @media(max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
    }
    @media(max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
`

const StyledBranding = styled.div`
  margin: 40px 0;
  .brandingCards {
    margin: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    @media(max-width: 768px) {
      grid-gap: 40px;
    }
    @media(max-width: 576px) {
      grid-template-columns: 1fr;
    }
    h3 {
      font-weight: 500;
      margin-bottom: 10px;
    }
    p {
      color: #6D6D6D;
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
              <Link to="/diensten#design" style={{ textDecoration: "none" }}>
                <Card
                  icon={design}
                  title='Web design'
                  text='Een goede website vertrekt steeds van een sterk design. De website moet een mooi, gebruiksvriendelijk en functioneel geheel vormen.'
                />
              </Link>
              <Link to="/diensten#development" style={{ textDecoration: "none" }}>
                <Card
                  icon={code}
                  title='Web development'
                  text='We vertalen designs naar code, rekening houdend met alle hedendaagse devices. Hiervoor maken we uitsluitend gebruik van de nieuwste technologieeën.'
                />
              </Link>
              <Link to="/diensten#performance" style={{ textDecoration: "none" }}>
                <Card
                  icon={speed}
                  title='Performance'
                  text='We geven je website een boost om een supersnelle laadtijd te bekomen. Hiedoor scoor je nog hoger in Google en verhoog je het gebruiksgemak van je website. '
                />
              </Link>
              <Link to="/diensten#analytics" style={{ textDecoration: "none" }}>
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
        <StyledBranding>
          <h1>Zet je merk op de kaart</h1>
          <div className="brandingCards">
            <div>
              <h3>Branding</h3>
              <p>Een uiterst zakelijke, formele website? Of liever net wat speels? Een website moet het imago van je bedrijf weerspiegelen. We trekken je huidige huisstijl door naar je site, of creëren er 1 voor jou.</p>
              <LinkUnderlined to="diensten">Meer over branding</LinkUnderlined>
            </div>
            <div>
              <h3>Social Media</h3>
              <p>Sociale media is niet meer weg te denken uit ons dagdagelijkse leven en kan heel wat mogelijkheiden bieden voor ondernemingen. We kunnen de sociale media helpen opzetten en integreren in je website.</p>
              <LinkUnderlined to="diensten">Meer over social</LinkUnderlined>
            </div>
            <div>
              <h3>Seo</h3>
              <p>Eens je een website hebt waar je 100% tevreden van bent, wil je uiteraard veel bezoekers. Hoog scoren in zoek- machines is dan een vereiste. We houden rekening met alle best-practices en optimaliseren je site zodat je meer kans maakt gevonden te worden.</p>
              <LinkUnderlined to="diensten">Meer over SEO</LinkUnderlined>
            </div>
          </div>
        </StyledBranding>
      </Container>
      <StyledFooterCta>

        <Container>
          <div id="footerCtaWrap">
            <div id="footerCtaText">
              <h2>Heb je al een website?</h2>
              <p>Krijg gratis en vrijblijvend een volledige analyse van je bestaande website!</p>
              <input type="email" />
              <input type="url" />
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
