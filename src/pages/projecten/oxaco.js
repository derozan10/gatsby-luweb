import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout'
import Container from '../../components/Container'
import oxaco_desktop from '../../img/projecten/oxaco/oxaco-website.jpg';
import oxaco_mobile_games from '../../img/projecten/oxaco/oxaco-mobile-games.png';
import oxaco_mobile_nav from '../../img/projecten/oxaco/oxaco-mobile-nav.png';
import oxaco_team from '../../img/projecten/oxaco/oxaco-teampage.png';

const StyledOxaco = styled.div`
.flex {
  display: flex;
  justify-content: space-around;
}
  img {
    height: 400px;
    width: auto;
    display: block;
    align-self: top;
  }
`

const oxaco = () => {
  return (
    <Layout inverse>
      <Container>
        <StyledOxaco>
          <h1>Case: Website voor Oxaco Basketbal te Boechout</h1>
          <h2>De homepage</h2>
          <section class="flex">
            <p>intro</p>
            <img src={oxaco_desktop} alt="oxaco website op desktop" />
          </section>
          <h2>Automatische uitgelichte wedstrijd</h2>
          <section class="flex">
            <p>intro</p>
            <img src={oxaco_mobile_games} alt="oxaco calender homepage" />
          </section>
          <h2>Navigatie mobile</h2>
          <section class="flex">
            <p>intro</p>
            <img src={oxaco_mobile_nav} alt="oxaco website navigatie op mobile" />
          </section>
          <h2>Een pagina voor elke ploeg</h2>
          <section class="flex">
            <p>intro</p>
            <img src={oxaco_team} alt="oxaco website op desktop" />
          </section>
        </StyledOxaco>
      </Container>
    </Layout>

  )
}

export default oxaco
