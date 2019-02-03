import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Fade } from 'react-reveal';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Card from '../components/Card';
import LinkUnderlined from '../components/LinkUnderlined';
import Container from '../components/Container';

import design from '../img/icons/design.svg';
import code from '../img/icons/code.svg';
import speed from '../img/icons/speed.svg';
import analytics from '../img/icons/analytics.svg';


const StyledServices = styled.section`
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    background: linear-gradient(to bottom right, #fff 50%, #eaeaea);
    transform: rotate(-5deg);
    transform-origin: left top;
    left: -10%;
    height: 100%;
    width: 150%;
    z-index: -2;
  }
  a {
      text-decoration: none
    }
  .serviceCards {
    margin: 40px 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    a {
      width: 25%;
      padding: 0 10px;
      box-sizing: border-box;
    }
    @media(max-width: 960px) {
      a {
        width: 50%;
        margin: 20px 0;
      }
    }
    @media(max-width: 576px) {
      a {
        width: 100%;
      }
    }
  }
`

const StyledBranding = styled.div`
  margin: 80px 0 80px 0;
  .brandingCards {
    margin: 40px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
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
      margin-bottom: 10px;
    }
    a {
      font-weight: 400;
    }
  }
`

const index = () => {
  return (
    <Layout title="Freelance web design &amp; development">
      <Hero />
      <StyledServices>
        <section>
          <Container withPadding>
            <h2>Wat we doen</h2>
            <Fade bottom cascade>
              <div className="serviceCards">
                <Link to="/diensten" state={{ service: "design" }}>
                  <Card
                    icon={design}
                    title='Web design'
                    text='Een goede website vertrekt steeds van een sterk design. De website moet een mooi, gebruiksvriendelijk en functioneel geheel vormen.'
                  />
                </Link>
                <Link to="/diensten" state={{ service: "development" }}>
                  <Card
                    icon={code}
                    title='Web development'
                    text='We vertalen designs naar code, rekening houdend met alle hedendaagse devices. Hiervoor maken we uitsluitend gebruik van de nieuwste technologieën.'
                  />
                </Link>
                <Link to="/diensten" state={{ service: "performance" }}>
                  <Card
                    icon={speed}
                    title='Performance'
                    text='We geven je website een boost om een supersnelle laadtijd te bekomen. Hierdoor scoor je nog hoger in Google en verhoog je het gebruiksgemak van je website. '
                  />
                </Link>
                <Link to="/diensten" state={{ service: "analytics" }}>
                  <Card
                    icon={analytics}
                    title='Analytics'
                    text='We helpen je inzichten te krijgen in de bezoekers van je website zodat je strategische inzichten krijgt en hierop doorslaggevende beslissingen kan maken.'
                  />
                </Link>
              </div>
            </Fade>
          </Container>
        </section>
      </StyledServices>
      <Container>
        <StyledBranding>
          <h2>Zet je merk op de kaart</h2>
          <div className="brandingCards">
            <div>
              <h3>Branding</h3>
              <p>Een uiterst zakelijke, formele website? Of liever net wat speels? Een website moet het imago van je bedrijf weerspiegelen. We trekken je huidige huisstijl door naar je site, of creëren er 1 voor jou.</p>
              <LinkUnderlined to="diensten">Meer</LinkUnderlined>
              {/* <LinkUnderlined to="diensten">Meer over branding</LinkUnderlined> */}
            </div>
            <div>
              <h3>Social Media</h3>
              <p>Sociale media is niet meer weg te denken uit ons dagdagelijkse leven en kan heel wat mogelijkheden bieden voor ondernemingen. We kunnen de sociale media helpen opzetten en integreren in je website.</p>
              {/* <LinkUnderlined to="diensten">Meer over social</LinkUnderlined> */}
              <LinkUnderlined to="diensten">Meer</LinkUnderlined>
            </div>
            <div>
              <h3>Seo</h3>
              <p>Eens je een website hebt waar je 100% tevreden van bent, wil je uiteraard veel bezoekers. Hoog scoren in zoekmachines is dan een vereiste. We houden rekening met alle best-practices en optimaliseren je site zodat je meer kans maakt gevonden te worden.</p>
              {/* <LinkUnderlined to="diensten">Meer over SEO</LinkUnderlined> */}
              <LinkUnderlined to="diensten">Meer</LinkUnderlined>
            </div>
          </div>
        </StyledBranding>
      </Container>
    </Layout >
  )
}

export default index
