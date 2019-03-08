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
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 0;
    #logo {
      height: 40px;
      width: auto;
      margin: 0;
      text-decoration: none;
    }
    a, li, li > span, li > ul > li {
        color: ${props => props.theme.colors.base};
        text-decoration: none;
        text-transform: uppercase;
        font-size: 16px;
    }
    a.active {
      font-weight: bold;
    }
    .dropdown {
      position: relative;
      > ul {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
        position: absolute;
        left: -25%;
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        background-color: #fff;
        border-radius: 5px;
        li {
          padding: 0;
          a {
            color: #737373;
            display: block;
            padding: 10px 20px;
          }
          a.active {
            background-color: #f4f4f4;
            color: #222831;
            font-weight: bold;
          }
          a.active:hover {
            color: #222831;
          }
          &:hover {
            background-color: #FCC72C;
            a {
              color: #fff;
            }
          }
        }
      }
    }
    .dropdown:hover > ul {
        visibility: visible;
        opacity: 1;
    }
    .hamburger {
      height: 24px;
      width: 40px;
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
  return (
    <StyledNavbar {...props}>
      <Container>
        <nav>
          <Link to="/">
            <img id="logo" src={Logo} alt="Luweb logo" />
          </Link>
          {
            props.mobile && (
              <div className={`hamburger ${props.active ? 'cross' : ''}`} aria-label="Menu" onClick={props.hamburgerClick}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            )
          }
          <Slide right>
            <ul className={props.mobile ? 'mobile' : 'desktop'} id={props.active ? 'active' : ''}>
              <li><Link to="/over" activeClassName="activeLink">Over</Link></li>
              <li className="dropdown">
                <span>
                  Diensten
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" style={{ position: 'relative', top: '2px', left: '2px' }}>
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" fill={props.inverse ? '#333' : '#fff'} />
                  </svg>
                </span>
                <ul>
                  <li>web design</li>
                  <li>web development</li>
                  <li>SEO</li>
                  <li>Performance optimalisatie</li>
                </ul>
              </li>
              <li><Link to="/projecten" activeClassName="activeLink">Projecten</Link></li>
              <li><Link to="/contact" activeClassName="activeLink">Contact</Link></li>
              <li><Link to="/blog" activeClassName="activeLink">Blog</Link></li>
            </ul>
          </Slide>
        </nav>
      </Container>
    </StyledNavbar>
  )
}

export default Navbar