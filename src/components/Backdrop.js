import React from 'react'
import styled from 'styled-components'

const Backdrop = (props) => {
    const StyledBackdrop = styled.div`
        background-color: #333;
        transition: opacity 5s ease-out;
        z-index: 5;
        opacity: ${props.active && "0.8"};
        transform: ${props.active ? "translateY(0%)" : "translateY(-100%)"};
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    `

    return (
        <StyledBackdrop {...props} onClick={() => props.closeNav()} />
    )
}


export default Backdrop