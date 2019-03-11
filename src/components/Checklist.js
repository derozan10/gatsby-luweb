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
    color: ${props => props.theme.colors.darkBlue};
    margin-right: 10px;
    font-size: 1.4em;
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
