import React from 'react';
import { graphql } from 'gatsby';
import Index from '../components/pages/Index';

export default props => <Index {...props} />;

export const pageQuery = graphql`
  query IndexNlQuery {
    site {
      siteMetadata {
        author {
          name
          homeCity
          email
          bio
          defaultLink
        }
      }
    }
    featured: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true }, featured: { eq: true } }
        fields: { langKey: { regex: "/(nl|any)/" } }
      }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            image {
              childImageSharp {
                sizes(maxWidth: 750) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          fields {
            slug
            langKey
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;
