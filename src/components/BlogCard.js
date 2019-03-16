import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Post = styled.li`
  position: relative;
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: 576px) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: 768px) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: #f3f3f3;
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: #333;
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: 576px) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`;

const Date = styled.h3`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`;

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`;

const Card = ({ slug, node_locale: locale, heroImage, title, publishDate, body, featured }) => (
  <Post featured={featured}>
    {slug && (
      <Link to={`/${locale}/blog/${slug}/`}>
        {heroImage && heroImage.fluid && heroImage.fluid.aspectRatio && (
          <Img fluid={heroImage.fluid} backgroundColor="#eeeeee" />
        )}
        {title && <Title>{title}</Title>}
        {publishDate && <Date>{publishDate}</Date>}
        {body && <Excerpt dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.excerpt }} />}
      </Link>
    )}
  </Post>
);

export default Card;
