import React from 'react';

const Button = (props) => {

    const roundedBtn = {
        backgroundColor: 'rgb(77, 122, 149)',
        color: '#fff',
        backgroundColor: props.color === "blue" ? "#4d7a95" : "#5AD3A1",
        height: '50px',
        textAlign: 'center',
        width: '180px',
        marginBottom: '10%',
        borderRadius: '50px',
        boxShadow: '10px 10px 14px 1px rgba(00, 00, 00, 0.2)',
        letterSpacing: '0.094em',
        display: 'inline-block',
        position: 'relative',
        border: 'none',
        fontSize: '0.97em',
        letterSpacing: '0.094em',
        margin: '0 5px'
    }

    return (
        <button style={roundedBtn}>
            {props.children}
        </button>
    )
}

export default Button;