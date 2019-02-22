import React from "react"
import Img from "gatsby-image"

import { graphql } from "gatsby"

import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from "../components/SEO";


const service = ({ data, location }) => {

  // console.log(data)
  // const { excerpt, html, frontmatter } = data.markdownRemark;
  // const { title } = data.site.siteMetadata
  return (
    <Layout inverse>
      {/* <SEO title={title} description={excerpt} /> */}
      <Container>

        <div dangerouslySetInnerHTML={{ __html: data.contentfulBlogpost.childContentfulBlogpostContentRichTextNode.childContentfulRichText.html }}></div>
      </Container>
    </Layout>
  )
}

export default service

export const pageQuery = graphql`
    query BlogPostById($id: String!) {
      contentfulBlogpost(id: {eq: $id}) {
      id
      datumTijd
      meta
      title
      headerImage {
        fluid {
          src
        }
      }
      childContentfulBlogpostContentRichTextNode {
        childContentfulRichText {
          html
        }
      }
    }
  }
`


