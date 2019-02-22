import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from "gatsby-image"


import Layout from '../components/Layout'
import Container from '../components/Container';

const Blog = ({ data }) => {
  const posts = data.allContentfulBlogpost.edges;
  return (
    <Layout inverse title="Onze blog">
      <Container withPaddingTop>
        <div className="posts">
          {posts.map(post => {
            const { title, meta, headerImage, url } = post.node;
            return (
              <Link key={url} to={`/blog/${url}`}>
                <Img fluid={headerImage.fluid} />
                <div className="post">
                  <h1>{title}</h1>
                  <p>{meta}</p>
                </div>
              </Link>
            )
          }
          )}
          blogposts
                </div>
      </Container>
    </Layout >
  )
}

export default Blog

export const query = graphql`
    query {
  allContentfulBlogpost {
    edges {
      node {
        id
        datumTijd
        meta
        title
        url
        headerImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
}
`
