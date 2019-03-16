import React, { Component } from 'react';
import styled from 'styled-components';

import { Fade } from 'react-reveal';
import Layout from '../components/Layout';
import Container from '../components/Container';
import CTA from '../components/CTA';
import Form from '../components/CTAform';
// import ServiceIcon from '../components/serviceIcon'
import speed from '../img/icons/speed.svg';
import search from '../img/icons/search.svg';
import analytics from '../img/icons/analytics.svg';
import marketing from '../img/icons/marketing.svg';

// import designImg from '../img/design.jpg'
import Checklist from '../components/Checklist';

const StyledServices = styled.div`
  position: relative;
  #serviceSections {
    display: inline-block;
    width: 70%;
    @media (max-width: 576px) {
      width: 100%;
    }
    .serviceSection {
      svg,
      .serviceDescription {
        vertical-align: top;
        display: inline-block;
      }
      .title {
        position: relative;
        padding-left: 50px;
        img {
          position: absolute;
          left: 0;
          height: 35px;
          width: 35px;
        }
      }
      .serviceDescription {
        @media (min-width: 577px) {
          width: 80%;
        }
        max-width: 700em;
        margin-left: 15px;
      }
      h3 {
        margin-bottom: 8px;
      }
      p {
        margin-bottom: 10px;
      }
      img {
        display: inline-block;
        width: 40%;
      }
    }
  }
  #form {
    h2 {
      text-align: center;
    }
    width: 30%;
    position: sticky;
    vertical-align: top;
    display: inline-block;
    top: 120px;
    padding: 20px;
    border: solid 1px lightgray;
    border-radius: 5px;
    @media (max-width: 576px) {
      width: 100%;
    }
  }
`;

class Diensten extends Component {
  render() {
    return (
      <Layout inverse title="Onze diensten">
        <Container>
          <div style={{ padding: '20px 0' }}>
            <h1>Onze diensten - altijd een oplossing op maat</h1>
            <StyledServices>
              <div id="serviceSections">
                <section className="serviceSection" id="website">
                  <div className="serviceDescription">
                    <div className="title">
                      <img src={speed} alt="icoontje van een raket" />
                      <h2>Webdesign en development</h2>
                    </div>
                    <p>Onze websites hebben volgende eigenschappen:</p>
                    <Checklist>
                      <li>responsive design</li>
                      <li>gebruiksvriendelijk</li>
                      <li>snelle laadtijd</li>
                      <li>gepersonaliseerd design</li>
                      <li>goed beveiligd (SSL-encryptie)</li>
                    </Checklist>
                    <p>
                      Door onze expertise in web development kunnen we met verschillende tools werken. We bekijken welke
                      hiervan de beste is voor jouw project. Meestal maken we gebruik van ReactJS of WordPress.
                    </p>
                  </div>
                </section>
                <section className="serviceSection" id="seo">
                  <div className="serviceDescription">
                    <div className="title">
                      <img src={search} alt="vergrootglas icoontje" />
                      <h2>SEO optimalisatie</h2>
                    </div>
                    <p>
                      Websites die mobielvriendelijk, performant, zorgvuldig opgesteld, inhoudelijk sterk... zijn,
                      worden hoger weergegeven in zoekmachines als Google. We houden dan ook rekening met al deze zaken
                      voor jouw website. Daarnaast kunnen we nog extra advertenties inzetten om nog hoger te eindigen in
                      zoekmachines.
                    </p>
                  </div>
                </section>
                <section className="serviceSection" id="analyse">
                  <div className="serviceDescription">
                    <div className="title">
                      <img src={analytics} alt="data chart icoon" />
                      <h2>Analyse en optimalisatie</h2>
                    </div>
                    <p>
                      Bij de lancering van je website zetten we tracking tools op, waarmee we inzichten verwerven over
                      de bezoekers en hun gedrag. We analyseren zo wat werkt (en wat niet) en gebruiken deze kennis om
                      alle online kanalen aan te passen en zo de conversie te verhogen.
                    </p>
                  </div>
                </section>
                <section className="serviceSection" id="analytics">
                  <div className="serviceDescription">
                    <div className="title">
                      <img src={marketing} alt="" />
                      <h2>Online marketing</h2>
                    </div>
                    <p>
                      Facebook, Instagram, LinkedIn... We bekijken welke kanalen voor jou het meeste relevant zijn en
                      zetten hier maximaal op in. We optimaliseren de conversie door je doelgroep zo specifiek mogelijk
                      te maken. Op deze manier optimaliseren we jouw marketing-budget.
                    </p>
                  </div>
                </section>
              </div>
              <Fade right>
                <section id="form">
                  <h2>Contacteer ons voor je gratis offerte</h2>
                  <Form cta="offerte aanvragen" />
                </section>
              </Fade>
            </StyledServices>
          </div>
        </Container>
        <CTA />
        {/* <Container>
                    <h2>Heb je al een website?</h2>
                    <p>We ondersteunen je graag met verschillende taken zoals: </p>
                    <ul>
                        <li>het onderhoud van je website</li>
                        <li>performance optimalisatie</li>
                        <li>het toevoegen van nieuwe features</li>
                        <li>… </li>
                    </ul>
                    <h2>Veilighied</h2>
                    <p>
                        We zorgen ervoor dat u zich geen zorgen hoeft te maken over de veiligheid van uw website en de gebruikers ervan.
                        We dragen veiligheid hoog in het vaandel bij Luweb. Daarom voorzien we al onze websites van een SSL-certificaat.
                        Dit zorgt ervoor dat al de communicatie van en naar je website op een veilige manier gebeurt.
                        Bovendien wordt je website als veilig gemarkeerd in de zoekbalk.
                    </p>
                </Container> */}
      </Layout>
    );
  }
}

export default Diensten;
