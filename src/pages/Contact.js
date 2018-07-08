import React from 'react'
import Container from '../layouts/Container'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Button from '../components/Button';

const Contact = () => (
    <div>
        <Navbar inverse />
        <Container>
            <h1>Contacteer ons</h1>
            <h2>We helpen je graag verder</h2>
            <p>Laat hieronder even een berichtje achter en we contacteren je zo snel mogelijk.<br />
                Voor je het weet, staat je splinternieuwe site <strong>online</strong>!<br />
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
                <p>
                    <Button color="blue" type="submit">Send</Button>
                </p>
            </form>
        </Container>
        <Footer />
    </div >

)

export default Contact
