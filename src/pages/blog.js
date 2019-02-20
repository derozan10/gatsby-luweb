import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout'
import Container from '../components/Container';

const Blog = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    return (
        <Layout inverse title="Onze blog">
            <Container withPaddingTop>
                <div className="posts">
                    {posts.map(post => {
                        const { title } = post.node.frontmatter;
                        const { slug } = post.node.fields;
                        return (
                            <Link key={slug} to={slug}>
                                <div className="post">
                                    {post.node.frontmatter.title}
                                </div>
                            </Link>
                        )
                    }
                    )}
                </div>
            </Container>
        </Layout >
    )
}

export default Blog

export const query = graphql`
    query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
    }
`
