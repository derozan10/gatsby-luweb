import React from 'react';
import styled from 'styled-components'

const StyledDienst = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 20px 0;
    h3, p {
        margin-bottom: 1rem
    }
    img {
        width: 20%;
        height: 20%;
    }
    .description {
        font-weight: bold;
    }
    .explanation {
        color: #0E1E25;
        opacity: 0.6
    }
    @media(max-width: 768px) {
        width: 100%;
    }
`

const Dienst = (props) => {
    return (
        <StyledDienst>
            {props.image}
            <div >
                <h3>{props.title}</h3>
                <p className="description">{props.description}</p>
                {props.explanation}
            </div>
        </StyledDienst>
    )
}

export default Dienst