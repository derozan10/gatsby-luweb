import React from 'react';
import styled from 'styled-components'
import { Link } from "gatsby";

import Container from './Container';
import Button from './Button';
import bol from '../img/bol.svg'
// import { relative } from 'path';
// import Container from '../components/Container';
import bg from "../img/mac.png"

const StyledHero = styled.header`
    color: #fff;
    position: relative;
    background-image:  url(${bg}), ${props => props.theme.blueGradient};
    background-repeat: no-repeat;
    #heroContainer {
        display: flex;
        justify-content: space-between;
    }
    .heroText {
        position: relative;
        z-index: 100;
        h1{
            font-weight: 400;
            font-size: 48px;
            margin: 0 0 48px 0;
            text-transform: capitalize;
            -webkit-font-smoothing: antialiased;
            @media (max-width: 768px) {
                font-size: 28px;
                margin-bottom: 32px;
            }
        }
        p {
            margin-bottom: 64px;
            padding-right: 20px;
            font-size: 30px;
            font-weight: 300;
            line-height: 1.4;
            @media (max-width: 768px) {
                font-size: 20px;
            }
            @media(min-width :768px) {
                max-width: 80%;
            }
        }
    }
`


export default () => {
    return (
        <StyledHero>
            <div style={{ position: "relative" }}>
                <Container withPaddingTop>
                    <div id="heroContainer">
                        <div className="heroText">
                            <h1>Jouw partner in webdesign en developement</h1>
                            <p>We maken, onderhouden en optimaliseren websites die jouw bedrijf vooruit helpen</p>
                            <div>
                                <Link to="/contact">
                                    <Button primary style={{ margin: "0 15px 15px 0" }}>Offerte opvragen</Button>
                                </Link>
                                <Link to="/diensten" >
                                    <Button style={{ margin: "0 15px 15px 0" }}>Onze diensten</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        </StyledHero>
    )
}
