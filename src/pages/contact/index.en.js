import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'contact',
  content: (
    <>
      <h1>contact me in english</h1>
    </>
  ),
  description: `
    Developer with 12 years of experience.
  `,
};

export default props => <Page i18n={i18n} {...props} />;
