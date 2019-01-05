import React from 'react'
import { ThemeProvider } from 'styled-components'

import Navbar from './Navbar'
import Footer from './Footer'

import 'typeface-roboto'
import './layout.css'
import SEO from './SEO';
import 'typeface-hind';

const colorPalette = {
  green: "#42C6B6",
  lightGreen: "#25f4db",
  black: "#33333",
  lightGray: "#757575",
  gray: "#666666",
  blueGray: '#4d7a95',
  blue: "#3360a6",
  darkBlue: "#221C67",
  blueGradient: 'linear-gradient(to right bottom,#221C67,#00468F,#006DA9)',
  greenGradient: 'linear-gradient(to right bottom,#42C6B6,#25f4db)',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
}

const Layout = props => {
  return (
    <ThemeProvider theme={colorPalette}>
      <>
        <SEO />
        <Navbar inverse={props.inverse ? true : false} />
        {props.children}
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout