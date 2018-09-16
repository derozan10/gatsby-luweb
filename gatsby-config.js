module.exports = {
  siteMetadata: {
    title: 'Luweb',
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
    }
  ]
}