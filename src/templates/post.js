import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Container from '../components/Container'
import BlogSEO from "../components/BlogSeo";
import BlogHero from '../components/BlogHero'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDate from '../components/PostDate'

const service = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    tags,
    metaDescription
  } = data.contentfulPost
  const postNode = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout inverse>
      <Helmet>
        {title && <title>{`${title}`}</title>}
      </Helmet>
      <BlogSEO pagePath={`blog/${slug}`} postNode={postNode} postSEO />
      {/* <SEO pagePath={slug} description={metaDescription.internal.content} postNode={postNode} postSEO /> */}
      {title && heroImage && <BlogHero title={title} image={heroImage} height={'20vh'} />}
      <Container>
        {tags && <TagList tags={tags} />}
        {publishDate && <PostDate date={publishDate} />}
        {body && <PageBody body={body} />}
      </Container>
      <PostLinks previous={previous} next={next} />
    </Layout>
  )
}

export default service

export const query = graphql`
  query($id: String!) {
    contentfulPost(slug: { eq: $id }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "DD MMMM, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`


