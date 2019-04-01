import React from 'react';
import styled from 'styled-components';

import Container from '../../components/Container';
// // import Button from '../../components/Button';
import LuwebMap from '../../components/LuwebMap';
import Form from '../../components/CTAform';
import Page from '../../components/pages/Page';

// icons
// import telephone from '../img/icons/_ionicons_svg_ios-call.svg';
// import send from '../img/icons/_ionicons_svg_ios-send.svg';
// import home from '../img/icons/_ionicons_svg_md-home.svg';

const StyledContact = styled.div`
  padding-top: 20px;
  #contactData {
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: flex-start;
      div {
        padding: 4px 0;
      }
    }
  }
  #contactData a {
    display: block;
    line-height: 1.6;
  }
  form {
    padding: 20px 0;
    max-width: 50em;
  }
  address,
  a {
    line-height: 1.6;
    font-style: normal;
    color: #333;
    text-decoration: none;
    font-size: 18px;
  }
  #btw {
    letter-spacing: 0.9px;
  }
`;

const i18n = {
  titleId: 'contact',
  content: (
    <>
      <StyledContact>
        <h1>Contacteer ons</h1>
        <p>
          Contacteer ons via de de gegevens hieronder of gebruik het contactformulier. Nadien nemen we zo snel mogelijk
          contact met je op.
        </p>
        <br />
        {/* <p>
          Voor je het weet, staat je splinternieuwe site <strong>online</strong>!
        </p> */}
        <Form />
        <div id="contactData">
          <div>
            <a href="mailto:lucas@luweb.be">info@luweb.be</a>
            <a href="tel:+496061042">0496/06.10.42</a>
          </div>
          <address>
            Zwaluwstraat 21
            <br />
            2530 Boechout
          </address>
          <div id="btw">BE 0677 875 095</div>
        </div>
      </StyledContact>
    </>
  ),
  description: `
    Developer with 12 years of experience.
  `,
};

export default props => <Page i18n={i18n} {...props} />;