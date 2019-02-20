import React from "react"
import Img from "gatsby-image"

import { graphql } from "gatsby"

import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from "../components/SEO";


const service = ({ data, location }) => {
  const { excerpt, html, frontmatter } = data.markdownRemark;
  const { title } = data.site.siteMetadata
  return (
    <Layout inverse>
      <SEO title={title} description={excerpt} />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

export default service

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`


