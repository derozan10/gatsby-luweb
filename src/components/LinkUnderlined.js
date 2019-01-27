import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledUnderline = styled.div`
    a {
      position: relative;
      color: #333;
      text-decoration: none;
      margin: 10px 0;
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        transition: 100ms ease-out 50ms;
        transform-origin: 0 24px;
        width: 100%;
        height: 4px;
        background: rgba(92,214,163,0.5);
      }
      &:hover, &:active {
        &:before {
          transition: 100ms ease-out;
          background: #5CD6A3;
        }
      }
    }
`

const LinkUnderlined = ({ to, children }) => {
  return (
    <StyledUnderline>
      <Link to={to}>
        {children}
      </Link>
    </StyledUnderline>
  )
}

export default LinkUnderlined
