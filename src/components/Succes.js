import React from 'react'

import dataAnalyse from '../img/data-analyse.jpg'
import seo from '../img/seo.jpg'
import socialMedia from '../img/social-media.jpg'
import Container from '../layouts/Container';

import './succes.css'

export default () => {

    return (
        <Container>
            <section className="succes">
                <h1 style={{ textAlign: 'center', height: '15vh' }}>Alles voor een online succes</h1>
                <div >
                    <div className="successblock">
                        <img className='successImage' src={socialMedia} alt="social bij Luweb" />
                        <div>
                            <h2>Integratie van allerlei diensten</h2>
                            <p>Google maps, Facebook, Instagram...?
                          We bekijken jouw noden en zorgen ervoor dat deze mooi geïntegreerd worden in je website.</p>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="successblock">
                        <div>
                            <h2>SEO</h2>
                            <p>We besteden veel zorg aan details tijdens het development proces. Dit in combinatie met goede content zal ervoor zorgen dat jouw website bovenaan de zoekresultaten terecht komt in zoekmachines zoals Google.</p>
                        </div>
                        <img className='successImage' src={seo} alt="seo bij Luweb" />
                    </div>
                </div>
                <div>
                    <div className="successblock">
                        <img className='successImage' src={dataAnalyse} alt="data analyse bij Luweb" />
                        <div>
                            <h2>Data analyse</h2>
                            <p>Meten is weten! We helpen je graag bij het opzetten van tools zoals Google Analytics.
                                Dit laat je toe betere inzichten te verkrijgen in het gedrag van je bezoekers zodat je hier beter op in kan spelen.
                          Handig, toch?</p>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}
