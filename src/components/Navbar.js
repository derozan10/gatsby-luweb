import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Container from './Container';

import Logo from '../img/logos/v2/luweb.svg';

const StyledNavbar = styled.div`
  position: fixed;
  z-index: 1000;
  background-color: #fff;
  width: 100%;
  box-shadow: 0 29px 60px 0 rgba(54, 57, 73, 0.09);
  nav {
    display: flex;
    justify-content: space-between;
    @media (min-width: 577px) {
      align-items: center;
    }
    @media (max-width: 576px) {
      flex-direction: column;
    }
    .flex {
      padding: ${props => (props.smaller ? '10px 0' : '20px 0')};
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    #logo {
      height: 50px;
      width: auto;
      margin: 0;
      text-decoration: none;
    }
    a,
    li,
    li > span,
    li > ul > li {
      color: ${props => props.theme.colors.base};
      text-decoration: none;
      border-bottom-width: 0;
      display: block;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      transition: all 0.1s ease-in;
    }
    a {
      position: relative;
    }
    a.active,
    a:hover {
      color: ${props => props.theme.colors.lightBlue};
    }
    .hamburger {
      height: 24px;
      width: 36px;
      position: relative;
      transform: rotate(0deg);
      transition: 0.5s ease-in-out;
      cursor: pointer;
      @media (min-width: 577px) {
        display: none;
      }
      span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: ${props => props.theme.colors.base};
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
      }
      span:nth-child(1) {
        top: 0px;
      }
      span:nth-child(2),
      span:nth-child(3) {
        top: 10px;
      }
      span:nth-child(4) {
        top: 20px;
      }
    }
    .hamburger.cross {
      span:nth-child(1) {
        top: 10px;
        width: 0%;
        left: 50%;
      }
      span:nth-child(2) {
        transform: rotate(45deg);
      }
      span:nth-child(3) {
        transform: rotate(-45deg);
      }
      span:nth-child(4) {
        top: 10px;
        width: 0%;
        left: 50%;
      }
    }

    ul {
      display: flex;
      list-style-type: none;
      top: 80px;
      box-sizing: border-box;
      li {
        padding: 0 20px;
        font-size: 18px;
      }
      @media (max-width: 576px) {
        height: 0px;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 1);
        z-index: 10;
        li {
          display: none;
        }
      }
    }
    ul#active {
      @media (max-width: 576px) {
        height: auto;
        li {
          display: block;
          text-align: center;
          padding: 20px 0;
        }
      }
    }
  }
`;

const Navbar = ({ active, hamburgerClick, smaller }) => (
  <StyledNavbar smaller={smaller}>
    <Container>
      <nav>
        <div className="flex">
          <Link to="/">
            <img id="logo" src={Logo} alt="Luweb logo" />
          </Link>
          <button
            className={`hamburger ${active ? 'cross' : ''}`}
            aria-label="Menu"
            onClick={hamburgerClick}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul id={active ? 'active' : ''}>
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/over" activeClassName="active">
              Over
            </Link>
          </li>
          <li>
            <Link to="/diensten" activeClassName="active">
              Diensten
            </Link>
          </li>
          {/* <li><Link to="/projecten" activeClassName="active">Projecten</Link></li> */}
          <li>
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  </StyledNavbar>
);

export default Navbar;
