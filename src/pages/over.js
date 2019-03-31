import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Container from '../components/Container';

const StyledOver = styled.div`
  padding: 20px 0;
  position: relative;
  #bigwave {
    position: absolute;
    width: 100vw;
    margin: 0;
    bottom: -1px;
    z-index: 1;
  }
  @media (max-width: 576px) {
    #luwebInfo {
      width: 80vw;
    }
  }
`;

const Over = () => (
  <Layout inverse title="Over ons">
    <Container>
      <StyledOver>
        <h1>Over Luweb</h1>
        <p>
          Luweb is een kleine onderneming, opgestart in 2017 door{' '}
          <a href="https://www.lucasvanremoortere.com" target="_blank" rel="noopener noreferrer">
            Lucas Van Remoortere
          </a>
          .
        </p>
        <p>
          Door dagdagelijks bezig te zijn met web development en <strong>Front-End Developer</strong> te zijn van
          beroep, beschik ik over al de nodige kennis om ook jouw bedrijf vooruit te helpen met het opbouwen en
          onderhouden van je website.
        </p>
        <p>
          De onderneming zelf is opgestart als zelfstandige in bijberoep en valt daarom onder de noemer "kleine
          onderneming onderworpen aan de vrijstellingsregeling van belasting", alsgevolg is{' '}
          <strong>BTW niet toepasselijk</strong>. Voor meer info hierover kan u de{' '}
          <a
            href="https://financien.belgium.be/nl/ondernemingen/btw/btw-plicht/vrijstellingsregeling"
            target="_blank"
            rel="noopener noreferrer"
          >
            website
          </a>{' '}
          van de Federale Overheidsdienst Financiënraadplegen.
        </p>
        <p>
          Verder is de onderneming gevestigd te <strong>Antwerpen</strong>, Borgerhout.
        </p>
      </StyledOver>
    </Container>
  </Layout>
);

export default Over;
