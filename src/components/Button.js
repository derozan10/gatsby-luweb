import React from 'react';
import styled from 'styled-components';


const Button = (props) => {
    const StyledButton = styled.button`
        color: #fff;
        height: 50px;
        text-align: center;
        padding: 0 20px;
        margin-bottom: 10 %;
        border-radius: 50px;
        box - shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.2);
        letter-spacing: 0.094em;
        display: inline-block;
        position: relative;
        border: none;
        font-size: 0.97em;
        letter-spacing: 0.094em;
        margin: 5px;
        cursor: pointer;
        background-color: ${props.color === "green" ? "#5AD3A1" : "#4d7a95"};
        &:hover {
            background-color: ${props.color === "green" ? "#6adcad" : "#5d90af"};
        }
    `

    return (
        <StyledButton>
            {props.children}
        </StyledButton>
    )
}

export default Button;