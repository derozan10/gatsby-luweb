import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Hero from '../components/Hero';
import Succes from '../components/Succes';
import Cards from '../components/Cards';
import CTA from '../components/CTA';
import SEO from '../components/SEO'
import Container from '../components/Container';
import arrowRight from '../img/arrow-right.svg'


const StyledServices = styled.div`
  position:relative;
  #services {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    flex-wrap: wrap;
    li {
      padding: 10px;
      margin: 10px;
      width: 300px;
      position: relative;
      img{
        height: 200px;
        width: 100%;
      }
      h2, p {
        color: #333;
      }
      h2 {
        font-size: 25px;
      }
      p {
        color: ${props => props.theme.lightGray}
      }
      &:hover {
        background: ${props => props.theme.blue};
        h2, p {
          color: #fff;
        }
      }
      .arrow {
        position: absolute;
        bottom: 10px;
        right: 10px;
        height: 20px;
        width: 20px;
        &:before {
          content: "";
          display: block;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
          border-left: 1px solid #dcdcdc;
          border-top: 1px solid #dcdcdc;
          width: 38px;
          height: 38px;
          position: absolute;
          z-index: 1;
        }
      }
    }
  }
  #sideCtaContainer{
    display: flex;
    justify-content: flex-end;
  #sideCTA {
    position: relative;
    right: 0;
    top: -40px;
    width: 300px;
    padding: 80px;
    z-index: 1;
    &:before{
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transform: skewX(-10deg) rotate(-10deg);
      transform-origin: top left;
      background-color: ${props => props.theme.lightGreen};
      z-index: -1;
    }
    p {
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #fff;
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
          <h1>Wat we doen</h1>
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
          </ul>
        </Container>
        <div id="sideCtaContainer">
          <div id="sideCTA">
            <p>versterk je online imago met een KICKASS website</p>
          </div>
        </div>
      </StyledServices>
      <Succes />
      <Cards />
      <CTA />
    </Layout >
  )
}

export default index
