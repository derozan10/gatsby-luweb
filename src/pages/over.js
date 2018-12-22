import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components';
import Container from '../components/Container';
import SEO from '../components/SEO';

const StyledOver = styled.div`
        /* background: linear-gradient(to right top, #221C67, #00468F, #006DA9); */
        position: relative;
        #overContainer {
            padding: 40px 0;
        }
        p a {
            font-weight: bold;
            text-decoration: underline;
            color: #4D7A95;
            cursor: pointer;
        }
        p a:hover {
            color: #6adcad;
        }
        #bigwave {
            position: absolute;
            width: 100vw;
            margin: 0;
            bottom: -1px;
            z-index: 1;
        }
        @media(max-width: 576px) {
            #luwebInfo {
                width: 80vw;
            }
        }
`

const Over = () => {
    return (
        <Layout inverse>
        <SEO title="Over ons"/>
            <Container>
                <StyledOver>
                    <div id="overContainer">
                            <p>Luweb is een kleine onderneming, opgestart in 2017 door <a href="https://www.lucasvanremoortere.com" target="_blank" rel="noopener noreferrer"><strong>Lucas Van Remoortere</strong></a>.</p>
                            <p>Door dagdagelijks bezig te zijn met web development en <strong>Front-End Developer</strong> te zijn van beroep, beschik ik over al de nodige kennis om ook jouw bedrijf vooruit te helpen met het opbouwen en onderhouden van je website.</p>
                            <p>De onderneming zelf is opgestart als zelfstandige in bijberoep en valt daarom onder de noemer "kleine onderneming onderworpen aan de vrijstellingsregeling van belasting", alsgevolg is <strong>BTW niet toepasselijk</strong>. Voor meer info hierover kan u de <a href="https://financien.belgium.be/nl/ondernemingen/btw/btw-plicht/vrijstellingsregeling" target="_blank" rel="noopener noreferrer">website van de Federale Overheidsdienst Financiën</a> raadplegen.</p>
                            <p>Verder is de onderneming gevestigd te <strong>Antwerpen</strong>, Borgerhout.</p>
                    </div>
                </StyledOver>
            </Container>
        </Layout >
    )
}

export default Over