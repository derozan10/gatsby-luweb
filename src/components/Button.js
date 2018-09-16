import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const StyledButton = styled.button`
        color: ${props.color === "white" ? "#221C67" : "#fff"};
        text-align: center;
        padding: 10px 20px;
        border-radius: 3px;
        margin-bottom: 10%;
        box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.2);
        letter-spacing: 0.094em;
        display: inline-block;
        position: relative;
        border: none;
        font-size: 0.97em;
        letter-spacing: 0.094em;
        margin: 5px;
        cursor: pointer;
        background-color: ${props.color === "white" ? "#fff" : "#4d7a95"};
        :hover {
            transform: translateY(-2px)
        }
    `

    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}

export default Button;