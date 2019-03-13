import React from 'react';

import Layout from '../components/Layout';
import Container from '../components/Container'

const NotFoundPage = () => (
  <Layout inverse title="Oeps...">
    <Container withPaddingTop>
      <h1>Oeps...</h1>
      <p>De pagina die je zoekt werd niet gevonden.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
