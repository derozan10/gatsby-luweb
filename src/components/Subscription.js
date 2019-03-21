import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledSubscription = styled.div`
  padding: 20px;
  border: solid 1px lightgray;
  border-radius: 5px;
  h4 {
    margin-bottom: 0;
  }
  button {
    margin-top: 20px;
  }
  input {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    border: 1px solid gray;
  }
`;

const Subscription = props => (
  <StyledSubscription>
    <form
      name="contact"
      className="contactForm"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      //   action="/bedankt"
      //   onSubmit={e => e.preventDefault()}
    >
      <h4>Schrijf je in op de nieuwsbrief</h4>
      <p>Blijf op de hoogte van nieuwe blogposts</p>
      <p style={{ visibility: 'hidden', height: 0, margin: 0, padding: 0 }}>
        <label htmlFor="bot-field">
          Vul dit niet in <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="blog-subscription" />
      <input type="email" id="mailbox" name="email" placeholder="E-Mail" autoComplete="email" required />

      <Button primary type="submit">
        Inschrijven
      </Button>
    </form>
  </StyledSubscription>
);

export default Subscription;
