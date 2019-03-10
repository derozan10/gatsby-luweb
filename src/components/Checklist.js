import React from 'react'
import styled from 'styled-components';
import check from '../img/icons/_ionicons_svg_md-checkmark.svg'

const StyledChecklist = styled.ul`
  li {
    padding-left: 28px;
  }
  li:before {
    vertical-align: middle;
    color: #e85555;
    content: url(${check});
    box-sizing: border-box;
    display: inline-block;
    font-family: 'ionicons';
    position: relative;
    left: -16px;
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
