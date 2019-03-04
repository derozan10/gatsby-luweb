import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image'
import { Fade } from 'react-reveal';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Card from '../components/Card';
import LinkUnderlined from '../components/LinkUnderlined';
import Container from '../components/Container';

import designImage from '../img/design.jpg'
import developementImage from '../img/development.jpg'
import optimalisatieImage from '../img/optimalisatie.jpg'

import design from '../img/icons/design.svg';
import code from '../img/icons/code.svg';
import speed from '../img/icons/speed.svg';
import analytics from '../img/icons/analytics.svg';
import marketing from '../img/icons/marketing.svg';
import wave from '../img/wave.svg';


const StyledServices = styled.section`
color: #fff;
padding: 40px 0;
background-color: #031145;
background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23b5b5b6' fill-opacity='0.14' fill-rule='evenodd'/%3E%3C/svg%3E");
  a {
      text-decoration: none
    }
  .serviceCards {
    margin: 40px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    a {
      width: 350px;
      padding: 0 10px;
      box-sizing: border-box;
      margin: 20px 0;
    }
    @media(max-width: 960px) {
      a {
        width: 50%;
      }
    }
    @media(max-width: 576px) {
      a {
        width: 100%;
      }
    }
  }
`

const StyledPitch = styled.div`
  position: relative;
  img {
    max-width: 100%;
    width: 35vw;
    height: auto;
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    /* opacity: 0.2; */
    &:after {
      content: '';
      position: absolute;
      display: block;
      bottom: 0;
      top: 2px;
      height: 2px;
      width: 100px;
      transform: rotate(5deg);
      background-color: blue;
      z-index: 20;
    }
  }
  #line {
    position: absolute;
    bottom: -40px;
    right: -40px;
    background-color: blue;
    min-width: 35vw;
    padding: 60px;
    color: #fff;
    ul li{
      list-style-type: circle;
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
    <Layout title="Freelance webdesign &amp; development" inverse withoutWaves>
      <Hero />
      <Container>
        <StyledPitch>
          <div className="pitchContainer">
            <img src={designImage} alt="" />
            <div id="line">
              <h2>Wij regelen alles van start tot volledige uitwerking.</h2>
              <ul>
                <li>Webdesign</li>
                <li>Web development</li>
                <li>Website onderhoud</li>
                <li>Website optimalisatie</li>
                <li>Online marketing</li>
              </ul>
            </div>
          </div>
        </StyledPitch>
      </Container>
      <StyledServices>
        <section>
          <Container withPadding>
            <h2>Wat we doen</h2>
            <Fade bottom cascade>
              <div className="serviceCards">
                <Link to="/diensten" state={{ service: "design" }}>
                  <Card
                    icon={design}
                    title='Webdesign'
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
                <Link to="/diensten" state={{ service: "development" }}>
                  <Card
                    icon={marketing}
                    title='Digitale marketing'
                    text='Alle online kanalen worden op elkaar afgestemd en vormen een gestroomlijnd geheel, dat jouw bedrijf tot een succesverhaal brengt.'
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
