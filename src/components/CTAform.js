import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from './Button';

const StyledCtaForm = styled.div`
  p {
    margin-bottom: 20px;
    padding: 0;
    text-align: center;
  }
  form {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    label {
      height: 1px;
      left: -1000em;
      overflow: hidden;
      position: absolute;
      top: -1000em;
      width: 1px;
    }
    input {
      letter-spacing: 0.5px;
      margin-bottom: 30px;
      background-color: #f5f5f5;
      border: 1px solid #f5f5f5;
      color: #5b5e5e;
      font-size: 14px;
      font-weight: 300;
      padding: 20px;
      box-sizing: border-box;
      width: 100%;
    }
  }
  p.policy,
  p.policy a {
    color: ${props => props.theme.colors.lightGray};
    margin-top: 20px;
  }
`;

const CTAform = props => (
  <StyledCtaForm {...props}>
    <form
      name="contact"
      className="contactForm"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/bedankt"
    >
      <p style={{ visibility: 'hidden', height: 0, margin: 0, padding: 0 }}>
        <label htmlFor="bot-field">
          Vul dit niet in <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="namebox">Naam</label>
      <input type="text" id="nameBox" autoComplete="name" name="name" placeholder="Naam" required />

      <label htmlFor="companyBox">Organisatie</label>
      <input
        type="text"
        id="companyBox"
        name="organisatie"
        autoComplete="on"
        placeholder="Bedrijf"
        required
      />

      <label htmlFor="mailbox">E-Mail</label>
      <input
        type="email"
        id="mailbox"
        name="email"
        placeholder="E-Mail"
        autoComplete="email"
        required
      />

      <label htmlFor="phone">Telefoon</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Telefoon"
        autoComplete="tel"
        required
      />

      <Button primary type="submit">
        {props.cta ? props.cta : 'Contacteer ons'}
      </Button>
    </form>
  </StyledCtaForm>
);

export default CTAform;
