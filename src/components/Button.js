import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const StyledButton = styled.button`
        color: ${props => props.primary ? '#fff' : props.theme.darkBlue};
        background-color: ${props => props.primary ? "#00468F" : '#fff'};
        text-align: center;
        padding: 12px 24px;
        border-radius: 20px;
        box-shadow: ${props => props.theme.boxShadow};
        letter-spacing: 0.094em;
        display: inline-block;
        position: relative;
        border: none;
        font-size: 18px;
        letter-spacing: 0.094em;
        cursor: pointer;
        border: ${props => props.primary ? 'none' : props.theme.darkBlue};
        :hover {
            background-color: ${props => props.primary ? "#005fa4" : "#005fa4"};
            color: #fff;
        }
    `

    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}

export default Button;