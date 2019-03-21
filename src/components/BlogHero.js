import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Container from './Container';

const Wrapper = styled.section`
  position: relative;
  min-height: 300px;
`;
const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  min-height: 300px;
  height: auto;
  @media (min-width: 576px) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
  &::before {
    content: '';
    background: linear-gradient(0deg, #000 0, rgba(0, 0, 0, 0) 50%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  text-transform: capitalize;
  font-weight: 600;
  position: absolute;
  width: 100%;
  margin: 0 auto;
  max-width: 1250px;
  bottom: 0;
  left: 0;
  line-height: 1.2;
  padding: 20px 40px;
  color: white;
  @media (max-width: 576px) {
    font-size: 30px;
  }
`;

const Hero = props => {
  const { height, image, title } = props;
  return (
    <Wrapper>
      <BgImg height={height} fluid={image.fluid} backgroundColor="#eeeeee" />
      <Container>
        <Title>{title}</Title>
      </Container>
    </Wrapper>
  );
};

export default Hero;
