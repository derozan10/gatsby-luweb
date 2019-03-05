import React from 'react';
import styled from 'styled-components';
import Socialbar from '../components/Socialbar';
import Container from './Container';
import { Link } from "gatsby";

import headerImage from '../img/hero-bg.jpg'
import Button from './Button';

const StyledHero2 = styled.div`
  position: relative;
  height: 70vh;
  z-index: 1;
  background: url(${headerImage}) fixed center no-repeat;
  background-size: cover;
  &:before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    right: 0;
    bottom: 0;
    background:linear-gradient(175deg,#474747,#000000,#f8f8f8);
    opacity: 0.7;
  }
  #siteTitle {
    padding: 20% 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    h1 {
      color: #fff;
      text-align: center;
      font-size: 40px;
      text-transform: uppercase;
      @media(max-width: 576px) {
        font-size: 32px;
      }
    }
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    transform: skewY(-5deg);
    transform-origin: left bottom;
    height: 100%;
    bottom: -90%;
    left: 0;
    right: 0;
    background: #fff;
  }
`

const Hero2 = (props) => {
  return (
    <StyledHero2>
      <Container>
        <div id="siteTitle">
          <h1>Jouw partner in webdesign en developement</h1>
          <Link to="/contact">
            <Button primary style={{ margin: "0 15px 15px 0" }}>Offerte opvragen</Button>
          </Link>
        </div>
        <Socialbar />
      </Container>
    </StyledHero2>
  )
}

export default Hero2
