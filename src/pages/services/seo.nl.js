import React, { Component } from 'react';
import styled from 'styled-components';

import { Fade } from 'react-reveal';
import Page from '../../components/pages/Page';
import Form from '../../components/CTAform';

const i18n = {
  titleId: 'seo',
  content: (
    <>
      <p>seo</p>
      <Fade right>
        <section id="form">
          <h2>Contacteer ons voor je gratis offerte</h2>
          <p>
            Websites die mobielvriendelijk, performant, zorgvuldig opgesteld, inhoudelijk sterk... zijn, worden hoger
            weergegeven in zoekmachines als Google. We houden dan ook rekening met al deze zaken voor jouw website.
            Daarnaast kunnen we nog extra advertenties inzetten om nog hoger te eindigen in zoekmachines.
          </p>
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
