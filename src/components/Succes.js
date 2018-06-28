import React from 'react'

import dataAnalyse from '../img/data-analyse.jpg'
import seo from '../img/seo.jpg'
import socialMedia from '../img/social-media.jpg'
import Container from '../layouts/Container';

export default () => {
    const successImage = {
        width: "200px",
        height: "auto",
        padding: '20px'
    }

    const successblock = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }

    return (
        <Container>
            <section className="succes">
                <h1>Alles voor een online succes</h1>
                <div >
                    <h2>Integratie van allerlei diensten</h2>
                    <div style={successblock}>
                        <img style={successImage} src={socialMedia} alt="social bij Luweb" />
                        <p style={{ padding: '20px' }}>Google maps, Facebook, Instagram...?
                          We bekijken jouw noden en zorgen ervoor dat deze mooi geïntegreerd worden in je website.</p>
                    </div>
                </div>
                <div >
                    <h2>SEO</h2>
                    <div style={successblock}>
                        <p style={{ padding: '20px' }}>We besteden veel zorg aan details tijdens het development proces.
                          Dit in combinatie met goede content zal ervoor zorgen dat jouw website bovenaan de zoekresultaten
                          terecht komt in zoekmachines zoals Google.</p>
                        <img style={successImage} src={seo} alt="seo bij Luweb" />
                    </div>
                </div>
                <div>
                    <h2>Data analyse</h2>
                    <div style={successblock}>
                        <img style={successImage} src={dataAnalyse} alt="data analyse bij Luweb" />
                        <p style={{ padding: '20px' }}>We zorgen ervoor dat je een goed zicht hebt op wat er allemaal afspeelt op je site.
                          Krijg belangrijke inzichten in de bezoekers van je site, zodat je hier nog beter op in zal kunnen spelen.
                          Handig, toch?</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}
