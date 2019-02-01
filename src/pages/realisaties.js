import React from 'react'
import { graphql } from 'gatsby'
// import Img from "gatsby-image";
import Gallery from '../components/Gallery'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Container from '../components/Container'

const StyledRealisaties = styled.div`
    margin-bottom: 40px;
    /* .gatsby-image-wrapper {
      margin: 20px;
      @media (max-width: 576px) {
        width: 100%;
      }
    }
  } */
`

const realisaties = ({ data }) => {
  const images = data.allFile.edges.map(edge => edge.node.childImageSharp)

  return (
    <>
      <Layout inverse title="Onze realisaties">
        <StyledRealisaties>
          <Container>
            <h1>Realisaties</h1>
            <Gallery photos={images} />
          </Container>
        </StyledRealisaties>
      </Layout>
    </>
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
