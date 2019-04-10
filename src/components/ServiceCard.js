import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  padding: 30px 30px 90px 30px;
  box-shadow: ${props => props.theme.boxShadow};
  box-sizing: border-box;
  overflow: hidden;
  background-color: #fff;
  border-top: solid 4px transparent;
  transition: border 0.3s;
  border-radius: 5px;
  min-height: 200px;
  height: 100%;
  h3 {
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
    color: #414042;
  }
  p {
    margin-top: 20px;
    color: #727272;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: -30px;
    left: -5%;
    width: 110%;
    height: 80px;
    transform: rotate(-7deg);
    transform-origin: center center;
    background: ${props => props.theme.blueGradient};
  }
  .cardIcon {
    position: absolute;
    display: block;
    z-index: 1;
    margin: 0 auto;
    width: 60px;
    bottom: 15px;
    left: calc(50% - 30px);
  }
  &:hover {
    border-top: solid 4px #005fa4;
  }
  li {
    list-style-type: disc;
  }
`;

const Card = props => {
  console.log(props);
  const { service, lang } = props;
  return (
    <Link to={`/${lang}/services/${service.slug}`}>
      <StyledCard>
        <h3>{service.label}</h3>
        <FormattedMessage id={`${service.slug}.meta`}>{text => <p>{text}</p>}</FormattedMessage>
        <img className="cardIcon" src={`/serviceIcons/${service.slug}.svg`} alt="icon" />
      </StyledCard>
    </Link>
  );
};

export default Card;
