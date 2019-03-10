import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { Fade } from 'react-reveal';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Container from '../components/Container';
import Masonry from '../components/Masonry';

import speed from '../img/icons/speed.svg';
import search from '../img/icons/search.svg';
import analytics from '../img/icons/analytics.svg';
import marketing from '../img/icons/marketing.svg';
import CTAform from '../components/CTAform';
import check from '../img/icons/_ionicons_svg_md-checkmark.svg'

const StyledServices = styled.section`
  z-index: 5;
  position: relative;
  padding-bottom: 40px;
  h2 {
    text-align: center;
  }
  a {
      text-decoration: none
    }
  .serviceCards {
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    a {
      width: 24%;
      box-sizing: border-box;
      margin: 20px 0;
    }
    @media(max-width: 960px) {
      a {
        width: 48%;
      }
    }
    @media(max-width: 576px) {
      flex-direction: column;
      justify-content: center;
      a {
        width: 100%;
      }
    }
  }
  .contactSection{
    display: flex;
    > div {
      width: 50%;
    }
    h2 {
      text-align: left;
      text-transform: uppercase;
    }
    #usp {
      ul.checkmark li {
        padding: 8px 0 24px 16px;
        color: #232525;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
      ul.checkmark li:before {
        vertical-align: middle;
        color: #e85555;
        content: url(${check});
        box-sizing: border-box;
        display: inline-block;
        font-family: 'ionicons';
        position: relative;
        left: -16px;

      }
    }
  }
`

const StyledProjects = styled.div`
padding: 40px 0;
  background-color: #031145;
  background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23b5b5b6' fill-opacity='0.14' fill-rule='evenodd'/%3E%3C/svg%3E");
  z-index: 3;
  position: relative;
  h1 {
    color: #fff;
  }
  #line {
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

const index = ({ data }) => {
  return (
    <Layout title="Freelance webdesign &amp; development" inverse withoutWaves>
      <Hero />
      <StyledServices>
        <Container withPadding>
          <h2>Wat we doen</h2>
          <Fade bottom cascade>
            <section className="serviceCards">
              <Link to="/diensten" state={{ service: "development" }}>
                <Card
                  icon={speed}
                  title='Website'
                  text={
                    <p>We maken super performante websites die doelgericht, gebruiksvriendelijk en geoptimaliseerd zijn voor alle hedendaagse devices.
                      </p>
                  }
                />
              </Link>
              <Link to="/diensten" state={{ service: "performance" }}>
                <Card
                  icon={search}
                  title='SEO'
                  text={<p>We verbeteren je online zichtbaarheid door actief aan 'Search Engine Optimization' te doen. Zo scoor je beter in zoekmachines als Google</p>}
                />
              </Link>
              <Link to="/diensten" state={{ service: "analytics" }}>
                <Card
                  icon={analytics}
                  title='Analyse en optimalisatie'
                  text={<p>We optimaliseren jouw marketingbudget door inzichten te krijgen in jouw klanten en onze strategie hierop aan te passen.</p>}
                />
              </Link>
              <Link to="/diensten" state={{ service: "development" }}>
                <Card
                  icon={marketing}
                  title='Online marketing'
                  text={<p>We verhogen de zichtbaarheid van jouw onderneming en betrekken klanten door slim gebruik te maken van allerlei kanalen.</p>}
                />
              </Link>
            </section>
          </Fade>
          <Fade bottom cascade>
            <section className="contactSection">
              <div id="usp">
                <h2>Een strategie op maat</h2>
                <ul className="checkmark">
                  <li>Doelgerichte, performante website</li>
                  <li>Technische ondersteuning en onderhoud</li>
                  <li>Actieve aanwezigheid op Sociale media</li>
                  <li>Zichtbaarheid in Google</li>
                  <li>Meer inzicht in je klanten</li>
                </ul>
              </div>
              <CTAform />
            </section>
          </Fade>
        </Container>
      </StyledServices>
      <StyledProjects>
        <Container>
          <h1>Onze realisaties</h1>
          <Masonry elements={data.allContentfulRealisatie.edges} />
        </Container>
      </StyledProjects>
    </Layout >
  )
}

export default index

export const realisatieQuery = graphql`
 query realisatieQuery {
  allContentfulRealisatie {
    edges {
      node {
        id
        text {
          text
        }
        highlightImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        projectUrl
        childContentfulRealisatieTextTextNode {
          text
        }
      }
    }
  }
 }
`