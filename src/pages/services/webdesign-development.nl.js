import React, { Component } from 'react';
import styled from 'styled-components';

import { Fade } from 'react-reveal';
import Page from '../../components/pages/Page';
import Form from '../../components/CTAform';
import Checklist from '../../components/Checklist';

const i18n = {
  titleId: 'webdesign-development',
  content: (
    <>
      <p>Onze websites hebben volgende eigenschappen:</p>
      <Checklist>
        <li>responsive design</li>
        <li>gebruiksvriendelijk</li>
        <li>snelle laadtijd</li>
        <li>gepersonaliseerd design</li>
        <li>goed beveiligd (SSL-encryptie)</li>
      </Checklist>
      <p>
        Door onze expertise in web development kunnen we met verschillende tools werken. We bekijken welke hiervan de
        beste is voor jouw project. Meestal maken we gebruik van ReactJS of WordPress.
      </p>
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
