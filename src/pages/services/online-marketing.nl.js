import React, { Component } from 'react';
import styled from 'styled-components';

import { Fade } from 'react-reveal';
import Page from '../../components/pages/Page';
import Form from '../../components/CTAform';

import marketing from '../../img/icons/marketing.svg';

// import designImg from '../img/design.jpg'
import Checklist from '../../components/Checklist';

const i18n = {
  titleId: 'online marketing',
  content: (
    <>
      <div className="serviceDescription">
        <div className="title">
          <img src={marketing} alt="" />
          <h2>Online marketing</h2>
        </div>
        <p>
          Facebook, Instagram, LinkedIn... We bekijken welke kanalen voor jou het meeste relevant zijn en zetten hier
          maximaal op in. We optimaliseren de conversie door je doelgroep zo specifiek mogelijk te maken. Op deze manier
          optimaliseren we jouw marketing-budget.
        </p>
      </div>
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
