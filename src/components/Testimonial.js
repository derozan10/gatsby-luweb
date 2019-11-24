import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import smallArrow from '../img/icons/smallArrow.svg';

const StyledTestimonial = styled.div`
  padding: 40px 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  > * {
    display: inline-block;
  }
  .testimonialText,
  .gatsby-image-wrapper {
    border-radius: 10px;
  }
  div.testimonialText {
    max-width: 80%;
    background-color: #e7f2ff;
    color: #14377f;
    padding: 40px 10%;
    right: 80px;
    position: relative;
    z-index: 0;
    h2,
    h3 {
      text-transform: initial;
      margin-bottom: 0px;
    }
    h2 {
      font-weight: 800;
    }

    p {
      margin: 10px 0;
      font-size: 18px;
      line-height: 1.6;
    }
  }
  .gatsby-image-wrapper {
    box-shadow: ${({ theme }) => theme.boxShadow};
    width: 20%;
    height: 300px;
    position: relative;
    z-index: 1;
  }
  a {
    font-weight: 600;
    svg {
      margin-left: 12px;
      transition: all 0.2s;
      .smallArrow {
        fill: #14377f;
      }
    }
    &:hover svg {
      position: relative;
      margin-left: 15px;
    }
    font-size: 18px;
    color: #14377f;
  }
`;

const avatarImage = graphql`
  query AvatarImageQuery {
    allFile(filter: { sourceInstanceName: { eq: "images" }, name: { regex: "/avatar/" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

function Testimonial(props) {
  return (
    <StyledTestimonial>
      <StaticQuery
        query={avatarImage}
        render={({ allFile }) => (
          <Image fluid={allFile.edges[0].node.childImageSharp.fluid} alt="lucas van remoortere" />
        )}
      />
      <div className="testimonialText">
        <h2>Lucas Van Remoortere</h2>
        <h3>Web Developer uit Antwerpen, Boechout</h3>
        <p>
          Met een bachelor diploma KMO-management op zak, startte ik mijn carrière met een functie
          als aankoper. Ik vond echter mijn passie in web development en besloot er mijn beroep van
          te maken.
        </p>
        <p>
          Na vele uren zelfstudie kon ik starten als web development consultant en leerde al snel de
          kneepjes van het vak. Ik deed ervaring op in verschillende vakgebeiden als e-commerce,
          marketing, SEO, conversie-optimalisatie, frontend -en backend developement...
        </p>
        <p>
          Al snel kriebelde het om zelfstandig te starten en zocht ik actief naar bedrijven die ik
          verder kon helpen met de uitbouw van hun online aanwezigheid. Zo werd werd Luweb geboren.
        </p>
        <p>
          Ben je ook op zoek naar een partner om jouw online verhaal naar het volgende niveau te
          tillen? Ik bespreek graag met jou hoe we het online imago van jouw bedrijf kunnen
          optimaliseren.
        </p>
        <Link to="/contact" id="contact">
          Contacteer me
          <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
            <path
              className="smallArrow"
              d="m8 0c4.4193548 0 8 3.58064516 8 8 0 4.4193548-3.5806452 8-8 8-4.41935484 0-8-3.5806452-8-8 0-4.41935484 3.58064516-8 8-8zm-.93225806 4.63225806 2.43548387 2.33548388h-5.89032258c-.42903226 0-.77419355.34516129-.77419355.77419354v.51612904c0 .42903225.34516129.77419354.77419355.77419354h5.89032258l-2.43548387 2.33548384c-.31290323.3-.31935484.8-.01290323 1.1064516l.35483871.351613c.30322581.3032258.79354839.3032258 1.09354839 0l4.28064519-4.2774194c.3032258-.30322581.3032258-.79354839 0-1.09354839l-4.28064519-4.28387097c-.30322581-.3032258-.79354839-.3032258-1.09354839 0l-.35483871.35161291c-.30645161.30967741-.3.80967741.01290323 1.10967741z"
              fill="#333"
            />
          </svg>
        </Link>
      </div>
    </StyledTestimonial>
  );
}

export default Testimonial;
