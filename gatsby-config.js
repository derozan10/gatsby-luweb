const config = require('./src/utils/siteConfig');

let contentfulConfig;

try {
  contentfulConfig = require('./.contentful');
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  };
} finally {
  const { spaceId, accessToken } = contentfulConfig.production;
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.');
  }
}

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    titleTemplate: `%s | ${config.siteTitle}`,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
    image: config.siteLogo,
    author: config.author,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/luweb-logo-blueGradient-small.png`, // This path is relative to the root of the site.
        legacy: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        // exclude: ["/category/*", `/path/to/page`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1183378,
        sv: 6,
      },
    },
    `gatsby-plugin-catch-links`,
  ],
};
