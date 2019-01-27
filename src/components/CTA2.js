import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

import Container from './Container';
import smallArrow from '../img/icons/smallArrow.svg'
import underConstruction from '../img/under-construction.svg'

const StyledCTA2 = styled.div`
    background: linear-gradient(to right, #1A246D, #4d7a94 90%);
    color: #fff;
    padding: 40px 0;
    margin: 80px 0 40px 0;
    position: relative;
    @media(max-width: 768px) {
        margin-top: 120px;
    }
    img#construct {
        position: absolute;
        top: -120px;
        width: 200px;
            right: 40px;
        @media(max-width: 768px){
            width: 160px;
            right: 20px;
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
        margin: 20px 0;
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