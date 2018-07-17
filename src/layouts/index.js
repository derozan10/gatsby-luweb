import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../img/favicon.png'

import './layout.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      htmlAttributes={{ "lang": "nl-BE" }}
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Luweb is gespecialiseerd in web development te Antwerpen. We helpen je graag verder met al je vragen voor jouw nieuwe of reeds bestaande website.' },
        { name: 'keywords', content: 'website, webdesign, web development, Antwerpen, freelance' },
        { name: 'theme-color', content: '#567992' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
