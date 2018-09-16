import React from 'react'
import styled from 'styled-components'

const Backdrop = (props) => {
    const StyledBackdrop = styled.div`
    position: absolute;
    opacity: 0;
    min-height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #333;
    transition: opacity 0.5s ease-out;
    z-index: 1;
    opacity: ${props.active && "0.8"};
    transform: ${props.active ? "translateY(0%)" : "translateY(-100%)"};
`
    return (
        <StyledBackdrop />
    )
}


export default Backdrop