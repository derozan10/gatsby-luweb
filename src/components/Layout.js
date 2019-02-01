import React from 'react'
import { ThemeProvider } from 'styled-components'

import Navbar from './Navbar'
import Footer from './Footer'

import 'typeface-roboto'
import './layout.css'
import 'normalize.css'
import SEO from './SEO';
import 'typeface-lato';

const colors = {
  primary: {
    one: "#050E61",
    two: "#0F1C8A",
    three: "#1A2693",
    four: "#2F3CAC",
    five: "#404CBF",
    six: "#6C77E0",
    seven: "#7985EC",
    eight: "#AFB7F8",
    nine: "#CFD3FC"
  },
  neutral: {
    one: "#F8F9FA",
    two: "#E1E7EC",
    three: "#D5DDE5",
    four: "#CCD4DB",
    five: "#AFBECC",
    six: "#929FB1",
    seven: "#6E7A89",
    eight: "#404B59",
    nine: "#212933"
  },
  green: "#42C6B6",
  lightGreen: "#25f4db",
  black: "#33333",
  lightGray: "#757575",
  gray: "#666666",
  blueGray: '#4d7a95',
  blue: "#3360a6",
  darkBlue: "#221C67"
}

const theme = {
  blueGradient: 'linear-gradient(175deg,#006DA9,#00468F,#221C67)',
  greenGradient: 'linear-gradient(to right bottom,#42C6B6,#25f4db)',
  sharpShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  boxShadow: '0 8px 24px 0 rgba(0,0,0,.11)'
}

const Layout = ({ children, location, inverse, title }) => {
  return (
    <ThemeProvider theme={{ ...theme, colors }}>
      <>
        <SEO title={title} />
        <div style={{ overflow: "hidden" }}>
          <Navbar inverse={inverse ? true : false} />
          {children}
        </div>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout