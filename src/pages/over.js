import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Container from '../components/Container';

const StyledOver = styled.div`
  padding: 20px 0;
  position: relative;
  #bigwave {
    position: absolute;
    width: 100vw;
    margin: 0;
    bottom: -1px;
    z-index: 1;
  }
  @media (max-width: 576px) {
    #luwebInfo {
      width: 80vw;
    }
  }
`;

const Over = () => (
  <Layout
    inverse
    title="Over ons"
    description="Luweb is een web development agency waar je terecht kan voor alles omtrent jouw website."
  >
    <Container>
      <StyledOver>
        <h1>Waarom kiezen voor Luweb?</h1>
        <section>
          <h2>De start van Luweb</h2>
          <p>
            Veel zelfstandigen en kleine ondernemingen merken dat een sterke online aanwezigheid
            steeds noodzakelijker wordt om te concurreren in eender welk vakgebied. In 2017 werd
            Luweb opgericht om bedrijven te ondersteunen in hun eerste stappen naar een succesvolle
            digitalisering.
          </p>
        </section>
        <section>
          <h2>Focus</h2>
          <p>
            We leggen sterk de focus op de website van onze klanten. Hoewel we ook diensten kunnen
            aanbieden voor social media management, ligt onze core business bij web development.
          </p>
        </section>

        <section>
          <p>
            Ben je op zoek naar een partner om jouw nieuwe website te creëren en / of te
            onderhouden? Dan ben je bij Luweb aan het juiste adres!
          </p>
          <Link to="/contact" id="contact">
            Contacteer ons
            {/* <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path
                className="smallArrow"
                d="m8 0c4.4193548 0 8 3.58064516 8 8 0 4.4193548-3.5806452 8-8 8-4.41935484 0-8-3.5806452-8-8 0-4.41935484 3.58064516-8 8-8zm-.93225806 4.63225806 2.43548387 2.33548388h-5.89032258c-.42903226 0-.77419355.34516129-.77419355.77419354v.51612904c0 .42903225.34516129.77419354.77419355.77419354h5.89032258l-2.43548387 2.33548384c-.31290323.3-.31935484.8-.01290323 1.1064516l.35483871.351613c.30322581.3032258.79354839.3032258 1.09354839 0l4.28064519-4.2774194c.3032258-.30322581.3032258-.79354839 0-1.09354839l-4.28064519-4.28387097c-.30322581-.3032258-.79354839-.3032258-1.09354839 0l-.35483871.35161291c-.30645161.30967741-.3.80967741.01290323 1.10967741z"
                fill="#333"
              />
            </svg> */}
          </Link>
        </section>
        <section>
          <h2>Vestiging</h2>
          <p>
            De onderneming is gevestigd te <strong>Antwerpen</strong>, Boechout.
          </p>
        </section>
      </StyledOver>
    </Container>
  </Layout>
);

export default Over;
