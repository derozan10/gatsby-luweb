import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledUnderline = styled.div`
      a {
      display: inline-block;
      position: relative;
      color: #333;
      text-decoration: none;
      margin: 10px 0;
      &:before, &:after {
        will-change: transform;
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
      }
      &:before {
        transition: 100ms ease-out 50ms;
        transform-origin: 0 24px;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20%;
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
