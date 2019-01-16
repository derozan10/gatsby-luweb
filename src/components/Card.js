import React from 'react'
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

const StyledCard = styled.div`
    position: relative;
    width: 200px;
    padding: 20px;
    box-shadow: ${props => props.theme.boxShadow};
    overflow: hidden;
    background-color: #fff;
    margin: 20px 0;
    h3 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 20px;
        height: 150px;
    }
    &:before {
        content: '';
        display: block;
        position: absolute;
        bottom: -20px;
        left: -5%;
        width: 110%;
        height: 70px;
        transform: rotate(-7deg);
        transform-origin: center center;
        background: ${props => props.theme.blueGradient};
    }
    img{
        position: relative;
        display: block;
        z-index: 1;
        margin: 0 auto;
        width: 60px;
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