import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import CardList from '../components/CardList';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout inverse>
      <SEO
        title={`Blog ${currentPage && currentPage !== 1 ? `pagina ${currentPage}` : ''}`}
        description={'Op de blog van Luweb kan je artikels vinden over web development, webdesign, en veel meer. Verdiep je in onze inzichten'}
      />
      <Container>
        <h1 style={{ paddingTop: "20px" }}>{`Blog ${currentPage && currentPage !== 1 ? `pagina ${currentPage}` : ''}`}</h1>
        {isFirstPage ? (
          <CardList>
            <BlogCard {...featuredPost} featured />
            {posts.slice(1).map(({ node: post }) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </CardList>
        ) : (
            <CardList>
              {posts.map(({ node: post }) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </CardList>
          )}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
<<<<<<< HEAD:src/pages/blog.nl.js
query nlPostQuery  {
    allContentfulPost(filter: {node_locale: {eq: "nl"}}, sort: {fields: [publishDate], order: DESC}) {
=======
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      filter: {node_locale: {eq: "nl"}}
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
>>>>>>> master:src/templates/blog.js
      edges {
        node {
          node_locale
          title
          id
          slug
          publishDate(formatString: "DD/MM/YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default Index
