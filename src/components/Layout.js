/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
// import CookieConsent from 'react-cookie-consent';
import Footer from './Footer';
import SEO from './SEO';
import Navbar from './Navbar';
import Backdrop from './Backdrop';

import 'typeface-lato';
// import 'normalize.css';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

export default class Layout extends Component {
  state = {
    navActive: false,
  };

  componentDidMount() {
    // window.$crisp = [];
    // window.CRISP_WEBSITE_ID = "0dd42ec7-d066-4701-8099-c141a5526b8b";
  }

  toggleNav = () => {
    const { navActive } = this.state;
    this.setState({ navActive: !navActive });
  };

  render() {
    const { navActive } = this.state;
    const { title, children } = this.props;
    return (
      <>
        <Helmet>
          {/* <script src="https://client.crisp.chat/l.js" async /> */}
          {/* <link href="https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css" rel="stylesheet"></link> */}
          <meta name="google-site-verification" content="8L5sdDFtnEJpqybB7QuO7CMBaJW25pArhsZnKBr5EFI" />
        </Helmet>
        <Backdrop active={navActive} closeNav={() => this.setState({ navActive: false })} />
        <SEO title={title} />
        <ThemeProvider theme={theme}>
          <>
            <Navbar hamburgerClick={this.toggleNav} active={navActive} />
            <div style={{ paddingTop: '80px', minHeight: '80vh' }}>{children}</div>
            <Footer />
            {/* <CookieConsent
              buttonText="Melding sluiten"
              location="bottom"
              cookieName="GDPRCookie"
              style={{ background: 'rgba(43,55,59, 0.9' }}
              buttonStyle={{ color: '#4e503b', fontSize: '13px', borderRadius: '15px', padding: '2px 8px' }}
              expires={150}
            >
              Deze website gebruikt cookies om de gebruikerservaring te verbeteren.
            </CookieConsent> */}
          </>
        </ThemeProvider>
        <GlobalStyle />
      </>
    );
  }
}
