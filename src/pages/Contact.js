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
            <form name="contact" className="contactForm" method="POST" netlify>
                <p>
                    <label>Naam</label>
                    <input type="text" name="name" />
                </p>
                <p>
                    <label>Organisatie</label>
                    <input type="text" name="name" />
                </p>
                <p>
                    <label>Email </label><input type="email" name="email" />
                </p>
                <p>
                    <label>Message: </label><textarea name="message"></textarea>
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
