import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Footer from './Footer'

import 'typeface-roboto'
import './layout.css'

const Layout = props => {
  const {
    children,
    // data,
    // location
  } = props

  return (
        <>
          <Helmet
            htmlAttributes={{ lang: 'nl-BE' }}
            title="Luweb"
            meta={[
              {
                name: 'description',
                content:
                  'Luweb is gespecialiseerd in Web Development te Antwerpen. We helpen je graag verder met al je vragen voor jouw nieuwe of reeds bestaande website.',
              },
              {
                name: 'keywords',
                content:
                  'website, webdesign, web development, Antwerpen, freelance',
              },
              { name: 'theme-color', content: '#3950D3' },
            ]}
          />
          <Navbar inverse={props.inverse ? true : false}/>
            {children}
          <Footer />
        </>
  )
}

export default Layout