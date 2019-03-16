import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledCardButton = styled.button`
  background-color: #00ff96;
  color: #355366;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #6adcad;
  }
`;

const CardButton = props => {
  const { link, text } = props;
  return (
    <Link to={link}>
      <StyledCardButton>{text}</StyledCardButton>
    </Link>
  );
};

export default CardButton;
