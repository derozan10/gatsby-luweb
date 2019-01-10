import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Button from '../components/Button';
import LuwebMap from '../components/LuwebMap'
import SEO from '../components/SEO'


const StyledContact = styled.div`
  #contactFlex, #name-mail {
      display: flex;
      justify-content: space-between;
      @media(max-width: 992px) {
          flex-direction: column;
      }
      #contactIntro {
          @media(min-width: 992px) {
              width: 40%;
          }
      }
      .contactForm {
          @media(min-width: 992px) {
              width: 50%;
              max-width: 600px;
          }
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 4px 0 rgba(14,30,37,.12);
          @media(max-width: 768px) {
              width: 100%;
          }
          label {
              display: block;
              margin: 10px 0 5px 0;
          }
          #name-mail > div {
              width: 48%;
          }
          input, textarea {
              background-color: #f4f4f4;
              border-radius: 5px;
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
                        <h4>We helpen je graag verder.</h4>
                        <p>Laat hieronder even <strong>een berichtje</strong> achter en we contacteren je zo snel mogelijk.<br />
                            Voor je het weet, staat je splinternieuwe site <strong>online</strong>!
                        </p>
                    </div>
                    <form name="contact" className="contactForm" method="POST" data-netlify="true" data-netlify-honeypot='bot-field' action="/bedankt">
                        <input type="hidden" name="form-name" value="contact" />
                        <div id="name-mail">
                            <div>
                                <label>Naam</label>
                                <input type="text" autoComplete='name' name="name" required />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" autoComplete='email' name="email" required />
                            </div>
                        </div>
                        <label>Organisatie</label>
                        <input type="text" autoComplete='on' name="organisatie" />

                        <label>Bericht:</label>
                        <textarea name="bericht" required></textarea>

                        <Button primary type="submit" style={{ width: '100%', marginTop: '20px' }}>Verzend</Button>
                    </form>
                </div>
            </StyledContact>
        </Container>
        <LuwebMap />
    </Layout>
)

export default Contact
