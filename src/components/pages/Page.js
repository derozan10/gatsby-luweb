import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import { getStructuredDataForAuthor } from '../../structuredData';
import { getAuthor } from '../../data/authors';
import Layout from '../layout';

const Header = styled.header`
  font-family: ${props => props.theme.page.header.fontFamily};
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin: ${props => props.theme.page.header.margin};
`;

const Content = styled.section`
  font-family: ${props => props.theme.page.content.fontFamily};
  p {
    margin: ${props => props.theme.page.content.p.margin};
    padding: ${props => props.theme.page.content.p.padding};
    font-size: ${props => props.theme.p.fontSize};
    line-height: ${props => props.theme.p.lineHeight};
  }
`;

const H1 = styled.h1`
  font-size: ${props => props.theme.page.header.fontSize};
  padding: 0;
  span {
    border-bottom: 1px solid rgba(0, 0, 0, 0.44);
    display: inline-block;
    padding-bottom: ${({ theme }) => theme.scale(3.5)};
    margin-bottom: -1px;
  }
`;

const Page = props => {
  const { i18n, location } = props;
  const author = getAuthor('lucas');
  author.description = i18n.description;
  const structuredData = getStructuredDataForAuthor(author);
  return (
    <Layout location={location}>
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
        <FormattedMessage id={i18n.titleId}>
          {title => (
            <Header>
              <Helmet title={title} meta={[{ name: 'description', content: i18n.description }]} />
              <H1>
                <span>{title}</span>
              </H1>
            </Header>
          )}
        </FormattedMessage>
        <Content>{i18n.content}</Content>
      </>
    </Layout>
  );
};

Page.propTypes = {
  i18n: PropTypes.shape({
    titleId: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default Page;
