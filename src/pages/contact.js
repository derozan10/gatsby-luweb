import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Container from '../components/Container'
import Button from '../components/Button';
import LuwebMap from '../components/LuwebMap'
import Form from '../components/CTAform'

//icons
import telephone from '../img/icons/_ionicons_svg_ios-call.svg';
import send from '../img/icons/_ionicons_svg_ios-send.svg';
import home from '../img/icons/_ionicons_svg_md-home.svg';


const StyledContact = styled.div`
    padding: 20px 0;
    #contactFlex {
        display: flex;
        @media(max-width: 576px) {
            flex-direction: column;
            justify-content: center;
        }
        #contactIntro {
            @media(max-width: 576px) {
                width: 100%;
            }
            #contactData {
                margin-top: 20px;
                img {
                    height: 20px;
                    width: 20px;
                    margin-right: 10px;
                }
            }
            #contactData > div {
                display: flex;
                align-items: center;
                padding: 8px;
            }
            address, a {
                font-style: normal;
                color: #333;
                text-decoration: none;
                font-size: 18px;
            }
        }
    }
`

const Contact = () => (
    <Layout inverse title="Contacteer ons">
        <Container style={{ minHeight: '60vh' }}>
            <StyledContact>
                <h1>Contacteer ons</h1>
                <div id="contactFlex">
                    <Form />
                    <div id="contactIntro">
                        <p>Contacteer ons via de contactgegevens hieronder of laat <strong>een berichtje</strong> via het contactformulier en we nemen zo snel mogelijk contact met je op.</p>
                        <br />
                        <p>Voor je het weet, staat je splinternieuwe site <strong>online</strong>!</p>
                        <div id="contactData">
                            <div>
                                <img src={telephone} alt="telephone" /><a href="tel:+496061042"> 0496/06.10.42</a>
                            </div>
                            <div>
                                <img src={send} alt="send" />
                                <a href="mailto:lucas@luweb.be">lucas@luweb.be</a>
                            </div>
                            <div>
                                <img src={home} alt="home" />
                                <address>
                                    Dokter Van de Perrelei 25 <br /> 2140 Borgerhout
                            </address>
                            </div>
                        </div>
                    </div>

                </div>
            </StyledContact>
        </Container>
        <LuwebMap />
    </Layout>
)

export default Contact
