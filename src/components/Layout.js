import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'typeface-roboto';
// import './layout.css';
import 'typeface-lato';
import 'normalize.css';

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO';



const Layout = ({ children, location, inverse, title }) => {
  return (
    <>
      <SEO title={title} />
      <ThemeProvider theme={theme}>
        <>
          <div style={{ overflow: "hidden" }}>
            <Navbar inverse={inverse ? true : false} />
            {children}
          </div>
          <Footer />
        </>
      </ThemeProvider >
      <GlobalStyle />
    </>
  )
}

export default Layout