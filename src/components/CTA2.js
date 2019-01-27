import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

import Container from './Container';
import smallArrow from '../img/smallArrow.svg'
import underConstruction from '../img/under-construction.svg'

const StyledCTA2 = styled.div`
    background: linear-gradient(to right, #1A246D, #4d7a94 90%);
    color: #fff;
    padding: 40px 0;
    margin: 80px 0 40px 0;
    position: relative;
    img#construct {
        width: 180px;
        position: absolute;
        top: -120px;
        right: 2vw;
        @media(min-width: 576px){
            width: 220px;
            right: 40px;
        }
    }
    #contact {
        color: #fff;
        text-align: center;
        img {
            margin: 0 5px;
        }
    }
    h3 {
        margin-bottom: 20px;
    }
    p#contact {
        max-width: 100%;
        margin-top: 20px;
    }
`

const CTA2 = () => {
    return (
        <StyledCTA2>
            <img id="construct" src={underConstruction} alt="website under construction" />
            <Container>
                <h3>Overtuigd van onze expertise?</h3>
                <p>Contacteer ons vrijblijvend, en we bekijken samen met jou hoe we ook jouw website naar een hoger niveau tillen.</p>
                <Link to="/contact"><p id="contact">Contacteer ons  <img style={{ height: '14px', widht: '14px' }} src={smallArrow} alt="small arrow" /></p> </Link>
            </Container>
        </StyledCTA2>
    )
}

export default CTA2