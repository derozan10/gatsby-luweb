import React, { Component } from 'react';
import styled from 'styled-components';

import { Fade } from 'react-reveal';
import Page from '../../components/pages/Page';
import Form from '../../components/CTAform';

import marketing from '../../img/icons/marketing.svg';

// import designImg from '../img/design.jpg'
import Checklist from '../../components/Checklist';

const i18n = {
  titleId: 'webdesign-development',
  content: (
    <>
      <p>website</p>
      <Fade right>
        <section id="form">
          <h2>Contacteer ons voor je gratis offerte</h2>
          <Form cta="offerte aanvragen" />
        </section>
      </Fade>
    </>
  ),
  description: `
    Developer with 12 years of experience.
  `,
};

export default props => <Page i18n={i18n} {...props} />;
