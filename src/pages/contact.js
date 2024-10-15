import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Container from '../components/Container';
// // import Button from '../components/Button';
import Form from '../components/CTAform';

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

const Contact = () => (
  <Layout
    inverse
    title="Contacteer ons"
    description="Wil je meer te weten komen over onze diensten? Contacteer ons via het contactformulier."
  >
    <Container style={{ minHeight: '60vh' }}>
      <StyledContact>
        <h1>Contact</h1>
        <p>
          Neem contact op aan de hand van de gegevens hieronder of gebruik het contactformulier.
          <br />
          Nadien nemen we zo snel mogelijk contact met je op.
        </p>
        <br />
        <Form />
        <div id="contactData">
          <div>
            <a href="mailto:info@luweb.be">info@luweb.be</a>
          </div>
          <div id="btw">BE 0677 875 095</div>
        </div>
      </StyledContact>
    </Container>
  </Layout>
);

export default Contact;
