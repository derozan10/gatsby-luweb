import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import SelectLanguage from './SelectLanguage';
import smallLogo from '../img/logos/luweb-logo-white-small.svg';
import lucas from '../img/avatar.jpg';
import languages from '../data/languages';

const { langs } = languages;

const StyledFooter = styled.div`
  color: ${props => props.theme.colors.neutral.two};
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  #footerLeft,
  #footerRight {
    width: 40%;
  }
  #footerMid {
    width: 20%;
  }
  #footerLeft {
    #myTitle {
      display: inline-block;
      img {
        display: inline-block;
        width: 60px;
        border-radius: 50%;
        vertical-align: middle;
      }
      #name {
        vertical-align: middle;
        height: 100%;
        display: inline-block;
        margin-left: 10px;
        line-height: 1.2;
        font-size: 18px;
      }
      #jobTitle {
        font-size: 14px;
      }
    }
    #address {
      color: ${props => props.theme.colors.neutral.five};
      font-weight: 300;
      line-height: 1.5;
      font-size: 14px;
      #name {
        font-size: 16px;
      }
      span {
        display: block;
        font-style: normal;
      }
    }
  }
  #footerMid {
    display: flex;
    justify-content: center;
  }
  #footerRight {
    a,
    p {
      color: #fff;
      display: block;
      text-align: right;
      font-weight: 300;
      font-size: 14px;
    }
    #socials {
      text-align: right;
      a {
        display: inline-block;
        svg {
          fill: #fff;
        }
      }
    }
  }
  @media (max-width: 768px) {
    #contactData #myTitle #name {
      font-size: 14px;
      #jobTitle {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 576px) {
    padding: 20px 0;
    #footerMid {
      display: none;
    }
    #footerLeft {
      width: 80%;
      #myTitle {
        padding: 5px 0;
        #name {
          margin: 4px 0;
        }
        img {
          display: block;
          width: 50px;
        }
      }
    }
  }
`;

const Footer = () => (
  <div style={{ backgroundColor: '#0b1542' }}>
    <Container>
      <StyledFooter>
        <div id="footerLeft">
          <div id="myTitle">
            <img src={lucas} alt="Lucas Van Remoortere" />
            <p id="name">
              <span>Lucas Van Remoortere</span> <br />
              <span id="jobTitle">Freelance webdeveloper</span>
            </p>
          </div>
          <address id="address">
            <span>
              Zwaluwstraat 21, <br />
              2530 Boechout
            </span>
          </address>
        </div>
        <div id="footerMid">
          <img src={smallLogo} style={{ height: '55px', width: '55px', margin: '0' }} alt="luweb logo" />
        </div>
        <div id="footerRight">
          <div id="socials">
            <a href="https://www.facebook.com/LuWebDevelopment" target="_blank" rel="noopener noreferrer">
              <svg className="social" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30">
                <path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/luwebdevelopement" target="_blank" rel="noopener noreferrer">
              <svg className="social" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30">
                <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z" />
                <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z" />
                <circle cx="351.5" cy="160.5" r="21.5" />
              </svg>
            </a>
          </div>
          <a href="mailto:">info@luweb.be</a>
          <a href="tel:+32496061042">0496/06.10.42</a>
          <p>BE0677875095</p>
        </div>
      </StyledFooter>
      <SelectLanguage langs={langs} className="select-languages" />
    </Container>
  </div>
);

export default Footer;
