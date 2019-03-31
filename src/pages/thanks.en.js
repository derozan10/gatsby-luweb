import React from 'react';

import Container from '../components/Container';
import Layout from '../components/layout';

const Thanks = () => (
  <Layout title="Bedankt voor jouw bericht" inverse>
    <Container>
      <div style={{ minHeight: '35vh' }}>
        <h1>Bedankt voor jouw bericht.</h1>
        <br />
        <p>We contacteren je zo spoedig mogelijk!</p>
      </div>
    </Container>
  </Layout>
);

export default Thanks;
