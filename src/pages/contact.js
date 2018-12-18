import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Button from '../components/Button';
import LuwebMap from '../components/LuwebMap'

import "../stylesheets/contact.sass"

const Contact = () => (
    <Layout inverse>
        <Container style={{ minHeight: '60vh' }}>
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

                    <Button color="blue" type="submit" style={{ width: '100%', marginTop: '20px' }}>Verzend</Button>
                </form>
            </div>
        </Container>
        <LuwebMap />
    </Layout>
)

export default Contact
