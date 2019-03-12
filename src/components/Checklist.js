import React from 'react'
import styled from 'styled-components';

const StyledChecklist = styled.ul`
  list-style: none;
  margin-left: 10px;
  li {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
  li:before {
    content: '✓';
    margin-right: 10px;
    font-size: 1em;
    left: -2.4em;
    top: 0.4em;
    width: 1.6em;
    height: 1.6em;
    line-height: 1.6em;
    text-align: center;
    display: inline-block;
    border-radius: 50%;
    color: #fff;
    background-color: ${props => props.theme.colors.lightBlue};
  }
`
const Checklist = (props) => {
  return (
    <StyledChecklist>
      {props.children}
    </StyledChecklist>
  )
}

export default Checklist
