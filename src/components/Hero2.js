import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Socialbar from '../components/Socialbar';
import Container from './Container';

import headerImage from '../img/explaining-tablet.jpg'

const StyledHero2 = styled.div`
  position: relative;
  height: 60vh;
  background: url(${headerImage}) center no-repeat;
  opacity: 0.9;
  background-size: cover;
  z-index: 1;
  /* &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.6;
    z-index: -1;
  } */
  #siteTitle {
    padding: 20%;
    h1 {
      color: #fff;
      text-align: center;
      font-size: 40px;
      text-transform: uppercase;
    }
  }
`

const Hero2 = (props) => {
  return (
    <StyledHero2>
      <Navbar />
      <Container>
        <div id="siteTitle">
          <h1>Jouw partner in webdesign en developement</h1>
        </div>
        <Socialbar />
      </Container>
    </StyledHero2>
  )
}

export default Hero2
