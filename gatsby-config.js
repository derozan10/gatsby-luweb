module.exports = {
  siteMetadata: {
    title: "Luweb",
    titleTemplate: "%s | Luweb",
    description:
      "Web development te Antwerpen - gespecialiseerd in performante websites met een goed oog voor design",
    siteUrl: "https://www.luweb.be", // sitemap
    image: "/luweb-logo-blueGradient-small.png"
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
        trackingId: "UA-99105204-2",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luweb`,
        short_name: `Luweb`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3950D3`,
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
        name: `realisatieImages`,
        path: `${__dirname}/src/img/realisaties`,
      },
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
        }`
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1183378,
        sv: 6
      },
    },
  ]
}