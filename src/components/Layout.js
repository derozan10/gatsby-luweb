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
    mobile: false
  }
  componentDidMount() {
    // window.$crisp = [];
    // window.CRISP_WEBSITE_ID = "0dd42ec7-d066-4701-8099-c141a5526b8b";
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  }

  checkMobile = () => {
    if (window.outerWidth <= 576) {
      this.setState({ mobile: true })
    } else {
      this.setState({ mobile: false })
    }
  }

  toggleNav = () => this.setState({ navActive: !this.state.navActive })

  render() {
    return (
      <>
        <Helmet>
          <script src="https://client.crisp.chat/l.js" async />
          <link href="https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css" rel="stylesheet"></link>
        </Helmet>
        <Backdrop active={this.state.navActive} closeNav={() => this.setState({ navActive: false })} />
        <SEO title={this.props.title} />
        <ThemeProvider theme={theme}>
          <>
            <Navbar hamburgerClick={this.toggleNav} mobile={this.state.mobile ? 'true' : 'false'} active={this.state.navActive} />
            <div style={{ paddingTop: "80px", minHeight: "80vh" }}>
              {this.props.children}
            </div>
            <Footer />
            <CookieConsent
              buttonText="Melding sluiten"
              location="bottom"
              cookieName="GDPRCookie"
              style={{ background: "#2B373B" }}
              buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
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
