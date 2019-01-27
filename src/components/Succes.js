import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import dataAnalyse from '../img/data.svg'
import seo from '../img/seo.svg'
import socialMedia from '../img/social.svg'
import Container from '../components/Container';

const StyledSucces = styled.div`
    border-radius: 3px;
    background-color: #fff;
    position: relative;
    h1 {
        text-align: center;
        padding: 10px;
    }
    .successBlocks {
        display: flex;
        justify-content: space-between;
    }
    .successblock {
        width: 300px;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        /* width: 80%; */
        /* margin: 20px auto; */
    }
    @media(max-width: 576px) {
        flex-direction: column;
    }
    h2 {
        margin-bottom: 10px;
        font-size: 20px;
    }
    p {
        color: rgba(14,30,37,.6);
        line-height: 1.6;
    }
    .successImage {
        /* width: 200px; */
        height: auto;
        max-width: 100%;
        display: block;
        margin: 0px;
        margin: 20px;
        box-shadow: ${props => props.theme.boxShadow};
        @media(max-width: 576px) {
            order: 1;
        }
    }
`

export default () => (
    <StyledSucces>
        <Container>
            <section className="succes">
                <h1>Alles voor een online succes</h1>
                <Fade bottom cascade>
                    <div className="successBlocks" >
                        <div className="successblock">
                            <img className='successImage' src={socialMedia} alt="social bij Luweb" />
                            <div>
                                <h2>Integratie van allerlei diensten</h2>
                                <p>
                                    Google maps, Facebook, Instagram...?
                                    We bekijken jouw noden en zorgen ervoor dat deze mooi geïntegreerd worden in je website.
                            </p>
                            </div>
                        </div>
                        <div className="successblock">
                            <img className='successImage' src={seo} alt="seo bij Luweb" />
                            <div>
                                <h2>SEO</h2>
                                <p>
                                    We besteden veel zorg aan details tijdens het development proces.
                                    Dit in combinatie met goede content zal ervoor zorgen dat jouw website bovenaan de zoekresultaten terecht komt in zoekmachines zoals Google.
                                </p>
                            </div>
                        </div>
                        <div className="successblock">
                            <img className='successImage' src={dataAnalyse} alt="data analyse bij Luweb" />
                            <div>
                                <h2>Data analyse</h2>
                                <p>
                                    Meten is weten! We helpen je graag bij het opzetten van tools zoals Google Analytics.
                                    Dit laat je toe betere inzichten te verkrijgen in het gedrag van je bezoekers
                                    zodat je hier beter op in kan spelen. Handig, toch?
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        </Container>
    </StyledSucces>
)
