import React from 'react'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const StyledCard = styled.div`
    position: relative;
    padding: 40px 40px 90px 40px;
    box-shadow: ${props => props.theme.boxShadow};
    box-sizing: border-box;
    overflow: hidden;
    background-color: #fff;
    border-top: solid 4px transparent;
    transition: border 0.3s;
    border-radius: 5px;
    min-height: 200px;
    height: 100%;
    h3 {
        font-weight: bold;
        margin-bottom: 20px;
        color: #414042;
    }
    p {
        margin-top: 20px;
        color: #727272;
    }
    &:before {
        content: '';
        display: block;
        position: absolute;
        bottom: -30px;
        left: -5%;
        width: 110%;
        height: 80px;
        transform: rotate(-7deg);
        transform-origin: center center;
        background: ${props => props.theme.blueGradient};
    }
    .cardIcon{
        position: absolute;
        display: block;
        z-index: 1;
        margin: 0 auto;
        width: 60px;
        bottom: 20px;
        left: calc(50% - 30px);
    }
    &:hover {
        border-top: solid 4px #005fa4;
    }
`

const Card = ({ icon, title, text }) => {
    return (
        <Fade>
            <StyledCard>
                <h3>{title}</h3>
                <p>{text}</p>
                <img className="cardIcon" src={icon} alt="icon" />
            </StyledCard>
        </Fade>
    )
}

export default Card