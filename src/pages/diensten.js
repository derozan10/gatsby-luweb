import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Container from '../components/Container';
import CTA2 from '../components/CTA2';
import Form from '../components/CTAform';
import ServiceIcon from '../components/serviceIcon'
import speed from '../img/icons/speed.svg';
import search from '../img/icons/search.svg';
import analytics from '../img/icons/analytics.svg';
import marketing from '../img/icons/marketing.svg';

import designImg from '../img/design.jpg'
import { Fade } from 'react-reveal';
import Checklist from '../components/Checklist';

const StyledServices = styled.div`
    position: relative;
    #serviceSections{
        display: inline-block;
        width: 70%;
        .serviceSection {
            svg, .serviceDescription {
                vertical-align: top;
                display: inline-block;
            }
            .title {
                position: relative;
                padding-left: 50px;
                img {
                    position: absolute;
                    left: 0;
                    height: 35px;
                    width: 35px;
                }
            }
            .serviceDescription {
                @media(min-width: 577px) {
                    width: 80%;
                }
                max-width: 700em;
                margin-left: 15px;
            }
            h3 {
                margin-bottom: 8px;
            }
            p {

                margin-bottom: 10px;
            }
            img {
                display: inline-block;
                width: 40%;
            }
        }
    }
    #form {
        h2 {
            text-align: center;
        }
        width: 30%;
        position: sticky;
        vertical-align: top;
        display: inline-block;
        top: 120px;
        padding: 20px;
        border: solid 1px lightgray;
        border-radius: 5px;
    }
`


class Diensten extends Component {
    render() {
        return (
            <Layout inverse title="Onze diensten">
                <Container>
                    <div style={{ padding: '20px 0' }}>
                        <h1>Onze diensten - altijd een oplossing op maat</h1>
                        <StyledServices>
                            <div id="serviceSections">
                                <section className="serviceSection" id="website">
                                    <div className="serviceDescription">
                                        <div className="title">
                                            <img src={speed} alt="icoontje van een raket" />
                                            <h2>Webdesign en development</h2>
                                        </div>
                                        <p>
                                            Onze websites hebben volgende eigenschappen:
                                            <Checklist>
                                                <li>responsive design (zodat deze op alle toestellen, van smartphone tot computer te gebruiken is)</li>
                                                <li>gebruiksvriendelijk</li>
                                                <li>snelle laadtijd</li>
                                                <li></li>
                                                <li></li>
                                            </Checklist>
                                        </p>
                                        <p>
                                            Door onze erg brede kennis van web development kunnen we met verschillende tools werken. We bekijken voor elk project wat de beste tool is en gaan er mee aan de slag. Meestal maken we gebruik van React of WordPress.
                                        </p>
                                        <img class="img-responsive" src={designImg} alt="jouw design hier" />
                                    </div>
                                </section>
                                <section className="serviceSection" id="seo">
                                    <div className="serviceDescription">
                                        <div className="title">
                                            <img src={search} alt="vergrootglas icoontje" />
                                            <h2>SEO optimalisatie</h2>
                                        </div>
                                        <h3>De juiste tool voor de job</h3>
                                        <p>
                                            Door onze expertise in development weten we precies welke technologieën, frameworks, libraries... het beste gebruikt kunnen worden voor jouw website.
                                    </p>
                                        <p>
                                            Hoewel vandaag erg snel gegrepen wordt naar een CMS (<i>Content Management System</i>) als WordPress, Drupal, Wix... , om een website op te zetten, coderen wij zo veel mogelijk websites zelf. Dit geeft ons de mogelijkheid om erg flexibel te zijn en makkelijk aanpassingen te doen tot op de pixel, snellere oplossingen te bieden en goedkoper hosting aan te bieden.
                                    </p>
                                        <p>
                                            Uiteraard is een CMS in sommige gevallen wel de beste optie, en helpen we jou graag de beste keuze te maken in het grote aanbod.
                                    </p>
                                        <h3>Best practices</h3>
                                        <p>
                                            We volgen steeds de richtlijnen die vooropgesteld worden voor het opstellen van websites en gaan hiervoor erg tot in detail. Het gebruiken van de juiste titels op de juiste plaats, alternatieve teksten bij afbeeldingen... zijn bijvoorbeeld dingen die erg belangrijk zijn om de gebruiksvriendelijkheid van je website te verhogen. Hiernaast merkt ook Google dit op, en zal je beloond worden met een hogere ranking in zoekmachines.
                                    </p>
                                        <h3>Browsers</h3>
                                        <p>
                                            Chrome, Firefox, Opera ,Safari, Edge... We testen onze websites op zowat elke browser die vandaag de dag gebruikt wordt, zodat je website altijd en overal toegankelijk is.
                                    </p>
                                    </div>
                                </section>
                                <section className="serviceSection" id="analyse">
                                    <div className="serviceDescription">
                                        <div className="title">
                                            <img src={analytics} alt="data chart icoon" />
                                            <h2>Analyse en optimalisatie</h2>
                                        </div>
                                        <p>
                                            De laadtijd van je website vinden we erg belangrijk bij Luweb. Misschien omdat we weten dat deze een grote impact heeft op het gebruiksgemak, je vindbaarheid in zoekmachines, conversie... En ga zo maar door.
                                    </p>
                                        <p>
                                            We analyseren onze websites steeds tot op het bot en trachten deze tot op de milliseconde te versnellen, zodat je kan genieten van al deze voordelen. Om te bewijzen dat we effectief de meest performante oplossing bieden, krijg je een gedetailleerd rapport bij elke website dat aantoont hoe goed je site scoort op performance.
                                    </p>
                                    </div>
                                </section>
                                <section className="serviceSection" id="analytics">

                                    <div className="serviceDescription">
                                        <div className="title">
                                            <img src={marketing} alt="" />
                                            <h2>Online marketing</h2>
                                        </div>
                                        <p>
                                            Krijg meer inzichten in je bezoekers zodat je hier beter op kan inspelen.
                                </p>
                                        <p>
                                            Tools als Google Analytics laten je zien hoe oud je doelgroep is, waar ze zich bevinden, op welk tijdstip ze op je site zitten... Door het surfgedrag van bezoekers te analyseren kan je jouw strategie online en offline aanpassen. We helpen jouw dan ook graag om deze tools op te zetten en je wegwijs te maken.
                                </p>
                                    </div>
                                </section>
                            </div>
                            <Fade right>
                                <section id="form">
                                    <h2>Krijg je gratis offerte</h2>
                                    <Form cta="offerte aanvragen" />
                                </section>
                            </Fade>
                        </StyledServices>
                    </div>
                </Container>
                <CTA2 />
                {/* <Container>
                    <h2>Heb je al een website?</h2>
                    <p>We ondersteunen je graag met verschillende taken zoals: </p>
                    <ul>
                        <li>het onderhoud van je website</li>
                        <li>performance optimalisatie</li>
                        <li>het toevoegen van nieuwe features</li>
                        <li>… </li>
                    </ul>
                    <h2>Veilighied</h2>
                    <p>
                        We zorgen ervoor dat u zich geen zorgen hoeft te maken over de veiligheid van uw website en de gebruikers ervan.
                        We dragen veiligheid hoog in het vaandel bij Luweb. Daarom voorzien we al onze websites van een SSL-certificaat.
                        Dit zorgt ervoor dat al de communicatie van en naar je website op een veilige manier gebeurt.
                        Bovendien wordt je website als veilig gemarkeerd in de zoekbalk.
                    </p>
                </Container> */}
            </Layout >
        )

    }

}

export default Diensten
