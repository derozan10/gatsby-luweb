import React from 'react';
import { graphql } from 'gatsby';
// import Img from "gatsby-image";
import Gallery from '../components/Gallery'
import styled from "styled-components";

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';

const StyledRealisaties = styled.div`
  .realisatieImages{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    @media (max-width: 576px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .gatsby-image-wrapper{
      height: 200px;
      width: 200px;
      margin: 20px;
      @media (max-width: 576px) {
        width: 100%;
      }
    }
  }
`

const realisaties = ({ data }) => {
  const images = data.allFile.edges.map(edge => edge.node.childImageSharp);

  return (
    <StyledRealisaties>
      <SEO title="Web development is onze passie." />
      <Layout inverse>
        <Container>
          <h1>Realisaties</h1>
          <Gallery photos={images} />
        </Container>
      </Layout>
    </StyledRealisaties>
  )
}

export default realisaties

export const REALISATIEQUERY = graphql`
  query REALISATIEQUERY {
    allFile(filter: { sourceInstanceName: { eq: "realisatieImages" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`

