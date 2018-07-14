import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';

const Diensten = () => {
    return (
        <div>
            <Navbar inverse />
            <Container>
                <h1>Onze diensten</h1>
                <h2>Optimalisatie bestaande website</h2>
                <p>
                    Wist u dat Google inmiddels bijna de helft van de websites geraadpleegd worden van op een smartphone t.o.v. een computer?
                    En dat Google jouw website lager zal weergegeven in de zoekresultaten indien deze niet snel genoeg is?
                    Misschien heeft u al wel gemerkt dat websites zonder HTTPS als onveilig gemarkeerd worden? <br />
                    We bekijken voor al deze zaken voor uw website en waar er verbeterpunten nodig zijn. We bezorgen u hiervan een rapport zodat u zelf kan beslissen welke aanpassingen er effectief dienen te gebeuren.
                    Uiteraard begeleiden we u bij deze beslissingen vanuit onze eigen oppinie en ervaringen.
                </p>
                <h2>Onderhoud van bestaande website</h2>
                <p>
                    Indien u nood heeft aan ondersteuning voor uw website staan we ter beschikking. <br />
                    We kunnen de content van de website voor u aanpassen, afbeeldingen wijzigen,...
                </p>
                <h2>Nieuwe website</h2>
                <p>
                    Voor het aanmaken van een nieuwe website zijn er heel wat zaken waar je rekening mee moet houden.
                    Is het nodig om de content zelf aan te passen? Moet de website volledig aangepast worden aan de "look en feel" van uw onderneming?
                    Wenst u producten te verkopen op deze website?
                    We nemen al deze zaken mee in overweging om te bepalen hoe we de website opstellen. Soms kan het voldoende zijn om te starten van een template website.
                    In andere gevallen is een volledig gepersonaliseerde website nodig.
                </p>
            </Container>
            <Footer />
        </div>
    )
}

export default Diensten
