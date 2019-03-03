import React from 'react'
import { graphql, Link } from 'gatsby'
// import Img from "gatsby-image";
// import Gallery from '../../../components/Gallery'
import styled from 'styled-components'
import oxacoMobile from '../../img/projecten/oxaco/oxaco-mobile.png'

import Layout from '../../components/Layout'
import Container from '../../components/Container'

const StyledRealisaties = styled.div`
    margin-bottom: 40px;
    img {
      width: 500px;
      height: auto;
    }
`

const projecten = (props) => {
  return (
    <Layout inverse title="Onze projecten - trots op wat we maken">
      <StyledRealisaties>
        <Container>
          <h1>Bekijk onze realisaties</h1>
          <Link to="/projecten/oxaco">
            <img src={oxacoMobile} alt="oxaco website op smartphones" />
          </Link>
        </Container>
      </StyledRealisaties>
    </Layout>
  )
}

export default projecten

// export const REALISATIEQUERY = graphql`
//   query REALISATIEQUERY {
//     allFile(filter: { sourceInstanceName: { eq: "realisatieImages" } }) {
//       edges {
//         node {
//           name
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//               src
//             }
//           }
//         }
//       }
//     }
//   }
// `
