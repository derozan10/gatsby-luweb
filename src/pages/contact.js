import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Button from '../components/Button';

import "../stylesheets/contact.sass"

const Contact = () => (
    <Layout inverse>
        <Container style={{minHeight: '60vh'}}>
            <h1>Contacteer ons</h1>
            <h4>We helpen je graag verder.</h4>
            <p>Laat hieronder even <strong>een berichtje</strong> achter en we contacteren je zo snel mogelijk.<br />
                Voor je het weet, staat je splinternieuwe site <strong>online</strong>!
            </p>
            <form name="contact" className="contactForm" method="POST" data-netlify="true" data-netlify-honeypot='bot-field' action="/bedankt">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label>Naam
                    <input type="text" autoComplete='name' name="name" required />
                    </label>
                </p>
                <p>
                    <label>Organisatie
                    <input type="text" autoComplete='on' name="organisatie" />
                    </label>
                </p>
                <p>
                    <label>Email <input type="email" autoComplete='email' name="email" required /></label>
                </p>
                <p>
                    <label>Bericht: <textarea name="bericht" required></textarea></label>
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button color="blue" type="submit">Verzend</Button>
                </div>
            </form>
            <div id='adres'>
                <p>Luweb</p>
                <p>Dokter Van de Perrelei 25, 2140 Borgerhout</p>
                <p>0496/06.10.42</p>
                <p>info@luweb.be</p>
                <p>BE0677875095</p>
            </div>
        </Container>
    </Layout>
)

export default Contact