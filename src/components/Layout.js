/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import CookieConsent from 'react-cookie-consent';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';
import enData from 'react-intl/locale-data/en';
import nlData from 'react-intl/locale-data/nl';
import { getLangs, getUrlForLang, getCurrentLangKey, isHomePage } from 'ptz-i18n';
import Footer from './Footer';
import Navbar from './Navbar';
import Container from './Container';
import en from '../data/messages/en';
import nl from '../data/messages/nl';

import 'typeface-lato';
// import 'normalize.css';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const messages = { en, nl };

addLocaleData([...enData, ...nlData]);

const Layout = props => {
  const { children, location, title, data } = props;
  const url = location.pathname;
  const isHome = url.split('/').filter(str => str !== '').length <= 1;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey !== 'nl' ? langKey : 'nl'}`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(item => ({
    ...item,
    link: item.link.replace(`/${defaultLangKey}/`, '/en/'),
  }));
  const { menu, author, sourceCodeLink, siteUrl, description } = data.site.siteMetadata;
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={langKey} messages={messages[langKey]}>
        <>
          <FormattedMessage id="title">
            {txt => (
              <Helmet defaultTitle={txt} titleTemplate={`%s | ${txt}`} defer={false}>
                <meta name="author" content={author.name} />
                <meta name="description" content={description} />
                <meta property="og:title" content={txt} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={`${siteUrl}${withPrefix('/avatar.jpg')}`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={txt} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:site" content={`@${author.twitter}`} />
                <meta name="twitter:author" content={`@${author.twitter}`} />
                <meta name="twitter:image" content={`${siteUrl}${withPrefix('/avatar.jpg')}`} />
                <meta name="google-site-verification" content="8L5sdDFtnEJpqybB7QuO7CMBaJW25pArhsZnKBr5EFI" />
              </Helmet>
            )}
          </FormattedMessage>
          <Navbar isHome={isHome} homeLink={homeLink} url={url} menu={menu} lang={langKey} />
          {isHome ? (
            <main>{children}</main>
          ) : (
            <Container>
              <main>{children}</main>
            </Container>
          )}
          <Footer author={author} langs={langsMenu} sourceCodeLink={sourceCodeLink} />
          <CookieConsent
            buttonText="Melding sluiten"
            location="bottom"
            cookieName="GDPRCookie"
            style={{ background: 'rgba(43,55,59, 0.9' }}
            buttonStyle={{ color: '#4e503b', fontSize: '13px', borderRadius: '15px', padding: '2px 8px' }}
            expires={150}
          >
            Deze website gebruikt cookies om de gebruikerservaring te verbeteren.
          </CookieConsent>
          <GlobalStyle />
        </>
      </IntlProvider>
    </ThemeProvider>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteUrl
            description
            languages {
              defaultLangKey
              langs
            }
            author {
              name
              # bio
              homeCity
              email
              defaultLink
              twitter
            }
            sourceCodeLink
            menu {
              label
              slug
              subDirectories {
                label
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
