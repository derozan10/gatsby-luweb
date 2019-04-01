import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'thanks',
  content: (
    <>
      <h1>Bedankt voor jouw bericht.</h1>
      <br />
      <p>We contacteren je zo spoedig mogelijk!</p>
    </>
  ),
  description: `
    Developer with 12 years of experience.
  `,
};

export default props => <Page i18n={i18n} {...props} />;
