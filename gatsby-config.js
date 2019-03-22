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
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-99105204-2',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-PLT6JMD",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      },
    },
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
    // {
    //   resolve: 'gatsby-plugin-crisp-chat',
    //   options: {
    //     websiteId: '0dd42ec7-d066-4701-8099-c141a5526b8b',
    //     // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
    //     // enableDuringDevelop: true,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              // linkImagesToOriginal: false,
              wrapperStyle: 'padding: 40px;',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `realisatieImages`,
        path: `${__dirname}/src/img/projecten`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: process.env.NODE_ENV === 'development' ? contentfulConfig.development : contentfulConfig.production,
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
