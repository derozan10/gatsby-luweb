import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

import 'typeface-roboto'
import './layout.css'
import SEO from './SEO';

const Layout = props => {
  const {
    children,
    // data,
    // location
  } = props

  return (
        <>
          <SEO/>
          <Navbar inverse={props.inverse ? true : false}/>
            {children}
          <Footer />
        </>
  )
}

export default Layout