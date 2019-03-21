const path = require(`path`);
// const fs = require('fs-extra');
const config = require('./src/utils/siteConfig');

// exports.onPostBuild = () => {
//   console.log('Copying locales');
//   fs.copySync(path.join(__dirname, '/src/locales'), path.join(__dirname, '/public/locales'));
// };

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(sort: { fields: [publishDate], order: DESC }, limit: 10000) {
          edges {
            node {
              slug
              publishDate
              node_locale
              contentful_id
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      const posts = result.data.allContentfulPost.edges;
      // const postsPerFirstPage = config.postsPerHomePage;
      // const postsPerPage = config.postsPerPage;
      // const numPages = Math.ceil(posts.slice(postsPerFirstPage).length / postsPerPage);

      // Create each individual post
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node;
        const next = i === posts.length - 1 ? null : posts[i + 1].node;
        createPage({
          path: `/${edge.node.node_locale}/blog/${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            id: edge.node.contentful_id,
            locale: edge.node.node_locale,
            prev,
            next,
          },
        });
      });
      resolve();
    });
  });

  // const loadTags = new Promise((resolve, reject) => {
  //   graphql(`
  //     {
  //       allContentfulTag(filter: { node_locale: { eq: "nl" } }) {
  //         edges {
  //           node {
  //             slug
  //             post {
  //               id
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `).then(result => {
  //     if (result.errors) {
  //       reject(result.errors);
  //     }

  //     const tags = result.data.allContentfulTag.edges;
  //     const { postsPerPage } = config;

  //     // Create tag pages with pagination if needed
  //     tags.map(({ node }) => {
  //       const totalPosts = node.post !== null ? node.post.length : 0;
  //       const numPages = Math.ceil(totalPosts / postsPerPage);
  //       Array.from({ length: numPages }).forEach((_, i) => {
  //         createPage({
  //           path: i === 0 ? `blog/tag/${node.slug}/` : `blog/tag/${node.slug}/${i + 1}/`,
  //           component: path.resolve(`./src/templates/tag.js`),
  //           context: {
  //             id: node.id,
  //             slug: node.slug,
  //             limit: postsPerPage,
  //             skip: i * postsPerPage,
  //             numPages,
  //             currentPage: i + 1,
  //           },
  //         });
  //       });
  //     });
  //     resolve();
  //   });
  // });

  return Promise.all([
    loadPosts,
    // loadTags
  ]);
};
