import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import oxacoMobile from '../../img/projecten/oxaco/oxaco-mobile.png';

import Layout from '../../components/Layout';
import Container from '../../components/Container';

const StyledRealisaties = styled.div`
  padding: 20px 0;
  img {
    width: 500px;
    height: auto;
  }
`;

const projecten = props => (
  <Layout inverse title="Onze projecten - trots op wat we maken">
    <StyledRealisaties>
      <Container>
        <h1>Realisaties</h1>
        <Link to="/projecten/oxaco">
          <img src={oxacoMobile} alt="oxaco website op smartphones" />
        </Link>
      </Container>
    </StyledRealisaties>
  </Layout>
);

export default projecten;
