module.exports = {
  siteMetadata: {
<<<<<<< HEAD
    title: "Luweb",
    titleTemplate: "%s · Web Development Antwerp",
    description:
      "Web development te Antwerpen - gespecialiseerd in performante websites met een goed oog voor design",
    url: "https://www.luweb.com", // No trailing slash allowed!
    image: "/luweb-logo-blueGradient-small.png"
=======
    title: 'Luweb',
    siteUrl: `https://www.luweb.be`,
>>>>>>> 30b5182a79c1c0b0a0f11ae9ad450b01eb88b077
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-sass',
    'gatsby-plugin-robots-txt',
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
        icon: `src/img/luweb-logo-blueGradient-small.png`, // This path is relative to the root of the site.
        legacy: true,
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
    }
  ]
}