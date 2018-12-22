module.exports = {
  siteMetadata: {
    title: "Luweb",
    titleTemplate: "%s · Web Development Antwerp",
    description:
      "Web development te Antwerpen - gespecialiseerd in performante websites met een goed oog voor design",
    url: "https://www.luweb.com", // No trailing slash allowed!
    image: "/luweb-logo-blueGradient-small.png"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
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
  ]
}

567992