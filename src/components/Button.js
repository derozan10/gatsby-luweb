import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const StyledButton = styled.button`
        color: ${props => props.primary ? '#333' : props.theme.colors.darkBlue};
        background-color: ${props => props.primary ? props.theme.colors.darkYellow : '#fff'};
        text-align: center;
        text-transform: uppercase;
        padding: 15px 32px;
        border-radius: 35px;
        box-shadow: ${props => props.theme.boxShadow};
        letter-spacing: 0.094em;
        display: inline-block;
        position: relative;
        border: none;
        font-size: 18px;
        letter-spacing: 0.094em;
        cursor: pointer;
        border: ${props => props.primary ? 'none' : props.theme.darkBlue};
        transition: background-color 0.2s;
        :hover {
            background-color: ${props => props.primary ? props.theme.colors.yellow : "#005fa4"};
            color: ${props => props.primary ? "#333" : "#fff"};
        }
        @media(max-width: 576px) {
            font-size: 16px;
        }
    `

    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}

export default Button;