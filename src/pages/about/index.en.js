import React from 'react';
import Page from '../../components/pages/Page';

const i18n = {
  titleId: 'about',
  content: (
    <>
      <p>scrrrrr</p>
    </>
  ),
  description: `
    About Luweb
  `,
};

export default props => <Page i18n={i18n} {...props} />;
