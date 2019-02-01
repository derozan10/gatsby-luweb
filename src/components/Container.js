import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    padding: ${props => props.withPaddingTop ? '100px 40px' : '0 40px'};
    margin: 0 auto;
    max-width: 1200px;
    @media(max-width: 576px) {
        padding:  ${props => props.withPaddingTop ? '40px' : '0 20px'};
    }
`

export default (props) => {
    return (
        <StyledContainer {...props} >
            {props.children}
        </StyledContainer>
    )
}
