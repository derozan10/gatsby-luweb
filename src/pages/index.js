import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

import Layout from '../components/Layout'
import Hero from '../components/Hero';
import Succes from '../components/Succes';
import Cards from '../components/Cards';
import CTA from '../components/CTA';
import SEO from '../components/SEO'
import Container from '../components/Container';
import arrowRight from '../img/arrow-right.svg'
import design from '../img/design-round.svg';
import code from '../img/code-round.svg';
import performance from '../img/performance-round.svg';
import analytics from '../img/analytics-round.svg';


const StyledServices = styled.section`
  overflow: hidden;
  position:relative;
  height: 100%;
  padding: 20px;
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
  #services {
    margin: 24px 0 48px 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 12px;
      margin: 0 12px;
      width: 240px;
      h2, p {
        text-align: center;
      }
      h2 {
        margin: 12px 0;
      }
      p {
        font-size: 16px;
        color: ${props => props.theme.gray}
      }
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
          {/* <h1>Wat we doen</h1>
          <p>Voor een nieuwe of bestaande website ben je bij ons aan het juiste adres. </p>
          <ul id="services">
            <li>
              <Link to="/diensten/#webdesign">
                <h2>Web design</h2>
                <p>
                  Een goede website vertrekt van een goed design.
                  Alle belangrijke info moet immers goed weergegven voor de bezoekers van je website,
                  en moet een mooi en gebruiksvriendelijk geheel vormen.
                </p>
                <img className="arrow" src={arrowRight} alt="arrow" />
              </Link>
            </li>
            <li>
              <Link to="/diensten/#webdevelopment">
                <h2>Web development</h2>
                <p>We vertalen designs naar code, rekening houdend met alle hedendaagse devices.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis labore officia natus eos laborum, ea magni vel fuga amet dolorem fugiat iusto ducimus neque quos fugit vitae nostrum. Nulla, ut.</p>
                <img className="arrow" src={arrowRight} alt="arrow" />
              </Link>
            </li>
            <li>
              <Link to="/diensten/#performance">
                <h2>Performance optimalisatie</h2>
                <p>
                  Een website die traag laadt is niet enkel irritant, maar zorgt ervoor dat bezoekers je website verlaten alvorens men ook maar iets heeft bekeken.
                  Onze websites zijn simpelweg het snelste wat technologie vandaag kan bieden. Dit heeft een positieve impact op conversie, gebruiksvriendelijkheid, SEO...
                </p>
                <img className="arrow" src={arrowRight} alt="arrow" />
              </Link>
            </li>
            <li>
              <Link to="/diensten/#seo">
                <h2>SEO optimalisatie</h2>
                <p>
                  Eens een website gemaakt is, wil je natuurlijk bezoekers. We weten met welke parameters zoekmachines als Google rekening houden, en passen hier ook je website op aan.
                  Hierdoor zal je hoger in de zoekresultaten terechtkomen en meer traffic genereren.
                </p>
                <img className="arrow" src={arrowRight} alt="arrow" />
              </Link>
            </li>
            <li>
              <Link to="/diensten/#analyse">
                <h2>Web analyse</h2>
                <p>
                  Wil je alles weten over de bezoekers van je website?
                  We hebben kennis van verschillende tools als Google Analytics, waarmee je alle nodige inzichten krijgt over je bezoekers.
                </p>
              </Link>
            </li>
          </ul> */}
          <h1>Wat we doen</h1>
          <Fade bottom cascade>
            <div id="services">
              <div className="service">
                <img src={design} alt="design" />
                <h2>Web design</h2>
                <p>Een goede website vertrekt steeds van een sterk design. De website moet een mooi, gebruiksvriendelijk en functioneel geheel vormen.</p>
              </div>
              <div className="service">
                <img src={code} alt="code" />
                <h2>Web development</h2>
                <p>We vertalen designs naar code, rekening houdend met alle hedendaagse devices. Hiervoor maken we uitsluitend gebruik van de nieuwste technologieeën.</p>
              </div>
              <div className="service">
                <img src={performance} alt="performance" />
                <h2>Performance</h2>
                <p>We geven je website een boost om een supersnelle laadtijd te bekomen. Hiedoor scoor je nog hoger in Google en verhoog je het gebruiksgemak van je website. </p>
              </div>
              <div className="service">
                <img src={analytics} alt="analytics" />
                <h2>Analytics</h2>
                <p>Met tools als Google Analytics kom je alles te weten van je bezoekers zodat je strategische inzichten krijgt en hierop doorslaggevende beslissingen kan maken.</p>
              </div>
            </div>
          </Fade>
        </Container>
      </StyledServices>
      <Succes />
      <Cards />
      <CTA />
    </Layout >
  )
}

export default index
