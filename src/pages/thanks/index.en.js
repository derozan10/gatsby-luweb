import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'thanks',
  content: (
    <>
      <h1>thanks for contacting us</h1>
      <p>We'll get back to you asap</p>
    </>
  ),
  description: `
    Developer with 12 years of experience.
  `,
};

export default props => <Page i18n={i18n} {...props} />;
