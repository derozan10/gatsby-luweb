import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';
import Container from '../components/Container'

import Logo from '../img/logos/luweb-logo-blueGradient.svg'

const StyledNavbar = styled.div`
  position: fixed;
  z-index: 1000;
  background-color: #fff;
  width: 100%;
  box-shadow: 0 29px 60px 0 rgba(54,57,73,.09);
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 10px 0;
    position: relative;
    #logo {
      height: 40px;
      width: auto;
      margin: 0;
      text-decoration: none;
    }
    a, li, li > span, li > ul > li {
        color: ${props => props.theme.colors.base};
        text-decoration: none;
        border-bottom-width: 0;
        display: block;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.5px;
        padding: 10px;
        text-transform: uppercase;
        transition: all 0.1s ease-in;
    }
    a {
      position: relative;
    }
    /* a::after {
      content: "";
      position: absolute;
      display: block;
      left: 10px;
      right: 10px;
      bottom: 0px;
      height: 1px;
      transform-origin: right top;
      transform: scaleX(0);
      background: ${props => props.theme.colors.darkBlue};
      transition: transform 0.3s ease-in-out 0s;
    }
    a.active::after, a:hover::after {
      transform: scale(1);
      transform-origin: left top;
    } */
    a.active, a:hover {
      color: ${props => props.theme.colors.lightBlue};
    }
    .hamburger {
      height: 24px;
      width: 36px;
      position: relative;
      transform: rotate(0deg);
      transition: .5s ease-in-out;
      cursor: pointer;
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
        transition: .25s ease-in-out;
      }
      span:nth-child(1) {
        top: 0px;
      }
      span:nth-child(2), span:nth-child(3) {
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
      li {
        padding: 0 20px;
        font-size: 18px;
      }
    }
    ul.mobile {
      display: none;
    }
    ul.mobile#active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 80px;
      height: 100vh;
      padding: 10px;
      right: 0;
      width: 100%;
      background-color: rgba(255,255,255,1);
      z-index: 10;
      li {
        text-align: center;
        padding: 20px 0;
      }
    }
  }
`

const Navbar = (props) => {
  const mobile = props.mobile === 'true' ? true : false;

  const navLinks = (
    <ul className={mobile ? 'mobile' : 'desktop'} id={props.active ? 'active' : ''}>
      <li><Link to="/" activeClassName="active">Home</Link></li>
      <li><Link to="/over" activeClassName="active">Over</Link></li>
      <li><Link to="/diensten" activeClassName="active">Diensten</Link></li>
      {/* <li><Link to="/projecten" activeClassName="active">Projecten</Link></li> */}
      <li><Link to="/contact" activeClassName="active">Contact</Link></li>
      <li><Link to="/blog" activeClassName="active">Blog</Link></li>
    </ul>
  );

  return (
    <StyledNavbar {...props}>
      <Container>
        <nav>
          <Link to="/">
            <img id="logo" src={Logo} alt="Luweb logo" />
          </Link>
          {
            mobile && (
              <div className={`hamburger ${props.active ? 'cross' : ''}`} aria-label="Menu" onClick={props.hamburgerClick}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            )
          }
          {mobile ? <Slide right>{navLinks}</Slide> : navLinks}
        </nav>
      </Container>
    </StyledNavbar >
  )
}

export default Navbar