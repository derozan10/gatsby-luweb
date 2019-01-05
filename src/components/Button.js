import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const StyledButton = styled.button`
        color: ${props => props.primary ? '#fff' : props.theme.darkBlue};
        background-color: ${props => props.primary ? props.theme.blue : '#fff'};
        text-align: center;
        padding: 10px 20px;
        border-radius: 18px;
        margin-bottom: 10%;
        box-shadow: ${props => props.theme.boxShadow};
        letter-spacing: 0.094em;
        display: inline-block;
        position: relative;
        border: none;
        font-size: 0.97em;
        letter-spacing: 0.094em;
        margin: 5px;
        cursor: pointer;
        border: ${props => props.primary ? 'none' : props.theme.darkBlue};
        :hover {
            background-color: ${props => props.theme.darkBlue};
            color: #fff;
            /* color: ${props.primary ? "white" : "#fff"}; */
        }
    `

    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    )
}

export default Button;