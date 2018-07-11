import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import styled from 'styled-components';
import bigWave from '../img/big-wave.svg'

const StyledOver = styled.div`
        background: linear-gradient(to right top, #221C67, #00468F, #006DA9);
        position: relative;
        #overContainer {
            position: relative;
            height: 70vh;
            padding: 40px 0;
        }
        #luwebInfo {
            width: 50vw;
            height: 60vh;
            margin-left: 10vw;
            position: relative;
        }
        p {
            color: #fff;
        }
        #bigwave {
            position: relative;
            bottom: -1px;
            left: 0;
            width: 100vw;
        }
`

const Over = () => {
    return (
        <div>
            <StyledOver>
                <Navbar />
                <div id="overContainer">
                    <div id="luwebInfo">
                        <p>LuWeb is een eenmanszaak opgestart in 2017 door Lucas Van Remoortere.</p>
                        <p>In het dagelijkse leven ben ik consultant front-end developer en startte de onderneming als zelfstandige in bijberoep.</p>
                        <p>Verder is de onderneming gevestigd in Borgerhout, maar verkiezen we om ter plaatse te komen tot bij de klant.
                            Zo kunnen we een betere inschatting maken van het type onderneming en mogelijks de website hierop aan te passen.</p>
                    </div>
                    <svg id="bigwave" height="417" viewBox="0 0 1404 417" width="1404" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><mask id="a" fill="#fff"><path d="m0 0h1404v228.69856 193.30144h-1404z" fill="none" /></mask><path d="m402.102704 421.382192c376.455995 0 298.503318-421.382192 800.202546-421.382192 112.31323 0 179.54482 26.1251734 201.69475 78.3755202v343.0066718c-918.902193 0-1252.867959 0-1001.897296 0z" fill="#fff" mask="url(#a)" /></svg>
                </div>
            </StyledOver>
            <Footer />
        </div >
    )
}

export default Over