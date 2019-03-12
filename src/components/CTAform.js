import React from 'react'
import styled from 'styled-components'
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
        text-transform: uppercase;
        margin-bottom: 30px;
        text-align: center;
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
  p.policy, p.policy a  {
      color: ${props => props.theme.colors.lightGray};
      margin-top: 20px;
    }
`

const CTAform = (props) => {
  return (
    <StyledCtaForm {...props}>
      <form
        name="contact"
        className="contactForm"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot='bot-field'
        action="/bedankt"
      >
        <p style={{ visibility: "hidden", height: 0, margin: 0, padding: 0 }}>
          <label>Vul dit niet in <input name="bot-field" /></label>
        </p>
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="namebox">Naam</label>
        <input type="text" id="nameBox" autoComplete='name' name="name" placeholder="Naam" required />

        <label htmlFor="companyBox">Organisatie</label>
        <input type="text" id="companyBox" name="organisatie" autoComplete='on' placeholder="Bedrijf" required />

        <label htmlFor="mailbox">E-Mail</label>
        <input type="email" id="mailbox" name="email" placeholder="E-Mail" autoComplete='email' required />

        <label htmlFor="phone">Telefoon</label>
        <input type="tel" id="phone" name="phone" placeholder="Telefoon" autoComplete='tel' required />

        <Button primary type="submit" >{props.cta ? props.cta : 'Contacteer ons'}</Button>
      </form>
      {/* <p className="policy"><small>Door bovenstaande gegevens in te vullen ga je akkoord met onze <a href="/privacy-policy">Privacy Policy</a>.</small></p> */}
    </StyledCtaForm>


    //     <div>
    //         <label>Naam</label>
    //         <input type="text" autoComplete='name' name="name" required />
    //     </div>
    //     <div>
    //         <label>Email</label>
    //         <input type="email" autoComplete='email' name="email" required />
    //     </div>

    //     <label>Organisatie</label>
    //     <input type="text" autoComplete='on' name="organisatie" />

    //     <label>Bericht:</label>
    //     <textarea name="bericht" required></textarea>
    //     <div data-netlify-recaptcha="true" />
    //     <Button primary type="submit" style={{ width: '250px', margin: '20px auto' }}>Verzend</Button>
    // </form>
  )
}

export default CTAform
