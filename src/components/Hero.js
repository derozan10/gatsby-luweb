import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Fade from 'react-reveal';
import { injectIntl, FormattedMessage } from 'react-intl';
import Socialbar from './Socialbar';
import Container from './Container';

import headerImage from '../img/hero-bg.jpg';
import Button from './Button';

const StyledHero = styled.div`
  position: relative;
  height: 70vh;
  z-index: 1;
  background-image: url(${headerImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 991px) {
    min-height: 600px;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, #474747, #000000, #474747);
    opacity: 0.7;
  }
  #siteTitle {
    padding: 20vh 20px;
    color: #fff;
    text-align: center;
    @media (max-width: 576px) {
      padding: 15vh 0 20vh 0;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    span {
      font-size: 48px;
      padding: 20px;
      text-transform: uppercase;
      @media (max-width: 576px) {
        font-size: 32px;
      }
    }
    h1 {
      text-transform: capitalize;
      font-size: 28px;
      font-weight: 300;
      padding: 20px;
      @media (max-width: 576px) {
        font-size: 24px;
      }
    }
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    transform: skewY(-5deg);
    transform-origin: left bottom;
    height: 100%;
    bottom: -100%;
    left: 0;
    right: 0;
    background: #fff;
  }
`;

const Hero2 = props => (
  <StyledHero>
    <Container>
      <Fade bottom cascade>
        <div id="siteTitle">
          <FormattedMessage id="header.subTitle">{txt => <span>{txt}</span>}</FormattedMessage>
          <FormattedMessage id="header.title">{txt => <h1>{txt}</h1>}</FormattedMessage>
          <Link to="/nl/contact">
            <Button primary style={{ margin: '0 15px 15px 0' }}>
              Offerte opvragen
            </Button>
          </Link>
        </div>
      </Fade>
      <Socialbar />
    </Container>
  </StyledHero>
);

export default injectIntl(Hero2);
