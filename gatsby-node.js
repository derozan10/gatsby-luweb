const path = require(`path`)
const axios = require('axios');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/blog-post.js`)

    resolve(
      graphql(
        `
          {
            allContentfulBlogpost {
              edges {
                node {
                  id
                  url
                }
              }
            }
          }
          `
      )
        .then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          result.data.allContentfulBlogpost.edges.forEach(({ node }) => {
            const path = `blog/${(node.url)}`
            createPage({
              path,
              component: postTemplate,
              context: {
                id: node.id
              }
            })
          })
        })

    )
  })
}