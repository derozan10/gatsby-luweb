import React from 'react';
import { graphql } from 'gatsby';
import Blog from '../../components/pages/Blog';

export default props => <Blog {...props} />;

export const pageQuery = graphql`
  query BlogNlQuery {
    site {
      siteMetadata {
        author {
          name
          homeCity
          email
          defaultLink
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } }, fields: { langKey: { regex: "/(nl|any)/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
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
            tagSlugs {
              tag
              link
            }
          }
          excerpt
        }
      }
    }
  }
`;
