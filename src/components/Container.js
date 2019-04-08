import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  height: 100%;
  padding: ${props => (props.withPaddingTop ? '100px 40px' : '0 40px')};
  margin: 0 auto;
  max-width: 1250px;
  @media (max-width: 576px) {
    padding: ${props => (props.withPaddingTop ? '40px' : '0 20px')};
  }
`;

// eslint-disable-next-line react/destructuring-assignment
const Container = props => <StyledContainer {...props}>{props.children}</StyledContainer>;

export default Container;
