import React from 'react'
import Container from '../components/Container'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Button from '../components/Button';

const Contact = () => (
    <div>
        <Navbar inverse />
        <Container>
            <h1>Contacteer ons</h1>
            <h4>We helpen je graag verder.</h4>
            <p>Laat hieronder even <strong>een berichtje</strong> achter en we contacteren je zo snel mogelijk.<br />
                Voor je het weet, staat je splinternieuwe site <strong>online</strong>!
            </p>
            <form name="contact" className="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <p>
                    <label>Naam
                    <input type="text" autocomplete='name' name="name" />
                    </label>
                </p>
                <p>
                    <label>Organisatie
                    <input type="text" autocomplete='on' name="organisatie" />
                    </label>
                </p>
                <p>
                    <label>Email <input type="email" autocomplete='email' name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button color="blue" type="submit">Send</Button>
                </div>
            </form>
        </Container>
        <Footer />
    </div >

)

export default Contact
