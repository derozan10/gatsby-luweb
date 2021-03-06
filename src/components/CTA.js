import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Container from './Container';
import smallArrow from '../img/icons/smallArrow.svg';
// import underConstruction from '../img/under-construction.svg';

const StyledCTA2 = styled.div`
  background: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.base};
  padding: 40px 0;
  margin: 80px 0 40px 0;
  position: relative;
  @media (max-width: 768px) {
    margin-top: 120px;
  }
  img#construct {
    position: absolute;
    top: -120px;
    width: 200px;
    right: 40px;
    @media (max-width: 768px) {
      width: 160px;
      right: 20px;
    }
  }
  a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
  }
  #contact {
    text-align: center;
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 20px 0;
    &:after {
      content: url(${smallArrow});
      height: 16px;
      width: 16px;
      display: inline-block;
      margin: 0 12px;
    }

    img {
      position: absolute;
      right: 0;
      bottom: 0;
      margin: 0 5px;
    }
  }
  h3 {
    margin: 20px 0;
    text-align: center;
  }
  p {
    max-width: 35em;
    margin: 0 auto;
    text-align: center;
  }
  p#contact {
    max-width: 100%;
    margin-top: 20px;
  }
`;

const CTA2 = () => (
  <StyledCTA2>
    {/* <img id="construct" src={underConstruction} alt="website under construction" /> */}
    <Container>
      <h3>Overtuigd van onze expertise?</h3>
      <p>
        Contacteer ons vrijblijvend, en we bekijken samen met jou hoe we ook jouw website naar een
        hoger niveau tillen.
      </p>
      <Link to="/contact" id="contact">
        Contacteer ons
      </Link>
    </Container>
  </StyledCTA2>
);

export default CTA2;
