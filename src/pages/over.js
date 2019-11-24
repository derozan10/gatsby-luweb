import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Container';
import Testimonial from '../components/Testimonial';

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
          Luweb is een "one man operation", opgestart in 2017 door{' '}
          <a href="https://www.lucasvanremoortere.com" target="_blank" rel="noopener noreferrer">
            Lucas Van Remoortere
          </a>
          .
        </p>
        <p>
          De opzet van de onderneming is om de kennis die ik opdeed vanuit mijn ervaring als web
          development consultant, te gebruiken om ondernemingen verder te helpen met hun website en
          zo hun online imago uit te bouwen en / of verbeteren.
        </p>

        <p>
          Verder is de onderneming gevestigd te <strong>Antwerpen</strong>, Boechout.
        </p>
      </StyledOver>
      <Testimonial />
    </Container>
  </Layout>
);

export default Over;
