import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from "react-helmet"
import CookieConsent from "react-cookie-consent";
import Footer from './Footer'
import SEO from './SEO';
import Navbar from './Navbar'
import Backdrop from './Backdrop';

import 'typeface-lato';
// import 'normalize.css';

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

export class Layout extends Component {
  state = {
    navActive: false,
  }
  componentDidMount() {
    // window.$crisp = [];
    // window.CRISP_WEBSITE_ID = "0dd42ec7-d066-4701-8099-c141a5526b8b";
  }

  toggleNav = () => this.setState({ navActive: !this.state.navActive })

  render() {
    return (
      <>
        <Helmet>
          {/* <script src="https://client.crisp.chat/l.js" async /> */}
          <meta name="google-site-verification" content="8L5sdDFtnEJpqybB7QuO7CMBaJW25pArhsZnKBr5EFI" />
          {/* <link href="https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css" rel="stylesheet"></link> */}
        </Helmet>
        <Backdrop active={this.state.navActive} closeNav={() => this.setState({ navActive: false })} />
        <SEO title={this.props.title} />
        <ThemeProvider theme={theme}>
          <>
            <Navbar hamburgerClick={this.toggleNav} mobile={this.state.mobile ? 'true' : 'false'} active={this.state.navActive} />
            <div style={{ paddingTop: "60px", minHeight: "80vh" }}>
              {this.props.children}
            </div>
            <Footer />
            <CookieConsent
              buttonText="Melding sluiten"
              location="bottom"
              cookieName="GDPRCookie"
              style={{ background: "rgba(43,55,59, 0.9" }}
              buttonStyle={{ color: "#4e503b", fontSize: "13px", borderRadius: '15px', padding: '2px 8px' }}
              expires={150}
            >
              Deze website gebruikt cookies om de gebruikerservaring te verbeteren.
            </CookieConsent>
          </>
        </ThemeProvider >
        <GlobalStyle />
      </>
    )
  }
}

export default Layout
