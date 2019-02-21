const path = require(`path`)
const axios = require('axios');
// const _ = require('lodash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const slugify = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }


  return new Promise((resolve, reject) => {
    const teamTemplate = path.resolve(`src/templates/blog-post.js`)

    resolve(
      graphql(
        `
          {
            allContentfulBlogpost {
              edges {
                node {
                  id
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
          result.data.allContentfulPloeg.edges.forEach(({ node }) => {
            const path = slugify(node.naam)
            createPage({
              path,
              component: teamTemplate,
              context: {
                guid: node.guid
              }
            })
          })
        })

    )
  })
}