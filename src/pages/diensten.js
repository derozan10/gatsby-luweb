import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container';
import Dienst from '../components/Dienst';
import CTA2 from '../components/CTA2';

import responsive from '../img/responsive.png'
import shuttle from '../img/shuttle.svg';
import key from '../img/key.svg';
import pensilRuler from '../img/pensil-ruler.png';
import SEO from '../components/SEO';


const Diensten = () => {
    return (
        <Layout inverse>
        <SEO title="Onze diensten"/>
            <Container>
                <h1>Onze diensten</h1>
                <h2>Nieuwe website</h2>
                <p>
                    Bij het maken van een nieuwe website komen heel wat zaken kijken. Bij Luweb zorgen we ervoor dat al het nodige in goede banen geleid wordt.
                    Hieronder enkele aspecten die we voor elk van onze websites uitvoerig onder de loep nemen:
                </p>
                <Dienst
                    title="Responsive design"
                    description="Of het nu gaat om een smartphone, tablet of desktop. We zorgen ervoor dat uw website er goed uitziet op elk device."
                    explanation={<p className="explanation">Wist je dat inmiddels meer dan de helft van de gebruikers een mobile device of tablet gebruikt om iets online op te zoeken? Daarom heeft Google beslist om alle websites te analyseren op hun mobiele variant, in plaats van de desktop-versie. Wil je goede zoekresultaten op Google? Dan zal je website er dus op alle toestellen goed moeten uitzien.</p>}
                    image={<img className="img-responsive" src={responsive} alt="responsive device mockup" />}
                />
                <Dienst
                    title="Performance"
                    description="Een performante website draagt bij tot een aangename gebruikservaring, hogere conversie en betere zoekresultaten."
                    explanation={<p className="explanation">Elke website waar we aan werken wordt bij Luweb onderwerpen aan een grondige analyse. We optimaliseren de kritieke punten en creëren een uiterst performante website, waar ook zoekmachines als Google van zullen houden!</p>}
                    image={<img className="img-responsive" src={shuttle} alt="raket" />}
                />
                <Dienst
                    title="Veiligheid"
                    description="We zorgen ervoor dat u zich geen zorgen hoeft te maken over de veiligheid van uw website en de gebruikers ervan."
                    explanation={<p className="explanation">We dragen veiligheid hoog in het vaandel bij Luweb. Daarom voorzien we al onze websites van een SSL-certificaat. Dit zorgt ervoor dat al de communicatie van en naar je website op een veilige manier gebeurt. Bovendien wordt je website als veilig gemarkeerd in de zoekbalk.</p>}
                    image={<img className="img-responsive" src={key} alt="sleutel" />}
                />
                <Dienst
                    title="Personalisatie"
                    description="Een website is het uithangbord van jouw bedrijf of jezelf als persoonlijkheid. Het weerspiegelt jouw imago naar de buitenwereld."
                    explanation={<p className="explanation">We kunnen je website volledig aanpassen naar wens. Moet de website volledig aangepast worden aan de "look &amp; feel" van jouw onderneming? Misschien heb je elders een website gezien die je erg aanspreekt? We bekijken de mogelijkheden voor elk budget.</p>}
                    image={<img className="img-responsive" src={pensilRuler} alt="meetlat en potlood" />}
                />
            </Container>
            <CTA2 />
            <Container>
                <h2>Heb je al een website?</h2>
                <p>We ondersteunen je graag met verschillende taken zoals: </p>
                <ul>
                    <li>het onderhoud van je website</li>
                    <li>performance optimalisatie</li>
                    <li>het toevoegen van nieuwe features</li>
                    <li>… </li>
                </ul>
            </Container>
        </Layout>
    )
}

export default Diensten
