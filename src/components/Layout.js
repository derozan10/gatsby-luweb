import React, { Component } from 'react';
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
import { Helmet } from "react-helmet"

export class Layout extends Component {
  componentDidMount() {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "0dd42ec7-d066-4701-8099-c141a5526b8b";
  }

  render() {
    return (
      <>
        <Helmet>
          <script src="https://client.crisp.chat/l.js" async />
        </Helmet>
        <SEO title={this.props.title} />
        <ThemeProvider theme={theme}>
          <>
            <Navbar {...this.props} />
            {this.props.children}
            <Footer />
          </>
        </ThemeProvider >
        <GlobalStyle />
      </>
    )
  }
}

export default Layout
