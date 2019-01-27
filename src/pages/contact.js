import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Button from '../components/Button';
import LuwebMap from '../components/LuwebMap'
import SEO from '../components/SEO'


const StyledContact = styled.div`
  #contactFlex {
      display: grid;
      grid-template-columns: 1.5fr 2fr;
      grid-gap: 20px;
      @media(max-width: 576px){
        grid-template-columns: 1fr;
      }
      h2 {
          margin-bottom: 10px;
      }
      .contactForm {
          flex-grow: grow;
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
          box-sizing: border-box;
          label {
              display: block;
              margin: 10px 0 5px 0;
          }
          input, textarea {
              background-color: #E1E7EC;
              padding: 10px 0;
              border-radius: 5px;
              border-color: #fff;
              margin: 10px 0;
              display: block;
              width: 100%;
          }
          textarea {
              height: 80px;
          }
      }
  }
`

const Contact = () => (
    <Layout inverse>
        <SEO title="Contacteer ons" />
        <Container style={{ minHeight: '60vh' }}>
            <StyledContact>
                <h1>Contacteer ons</h1>
                <div id="contactFlex">
                    <div id="contactIntro">
                        <h2>We helpen je graag verder.</h2>
                        <p>Laat hieronder even <strong>een berichtje</strong> achter en we contacteren je zo snel mogelijk.<br />
                            Voor je het weet, staat je splinternieuwe site <strong>online</strong>!
                        </p>
                    </div>
                    <form
                        name="contact"
                        className="contactForm"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot='bot-field'
                        action="/bedankt"
                    >
                        <p style={{ visibility: "hidden", height: 0 }}>
                            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        <input type="hidden" name="form-name" value="contact" />
                        <div>
                            <label>Naam</label>
                            <input type="text" autoComplete='name' name="name" required />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" autoComplete='email' name="email" required />
                        </div>

                        <label>Organisatie</label>
                        <input type="text" autoComplete='on' name="organisatie" />

                        <label>Bericht:</label>
                        <textarea name="bericht" required></textarea>
                        <div data-netlify-recaptcha="true" />
                        <Button primary type="submit" style={{ width: '250px', margin: '20px auto' }}>Verzend</Button>
                    </form>
                </div>
            </StyledContact>
        </Container>
        <LuwebMap />
    </Layout>
)

export default Contact
