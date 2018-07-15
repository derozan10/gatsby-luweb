module.exports = {
  siteMetadata: {
    title: 'Luweb',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lobster`,
          `regular\:400` // you can also specify font weights and styles
        ]
      }
    }]
}
