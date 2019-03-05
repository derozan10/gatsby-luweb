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

    button {
      border: none;
      background: transparent;
      padding: 0;
    }
    .hamburger {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 24px;
      width: 30px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      box-sizing: border-box;
      &:focus {
        outline: none;
      }
      span.line {
        width: 30px;
        height: 2px;
        background: ${props => props.theme.colors.base};
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
      top: 85px;
      height: 100vh;
      padding: 10px;
      left: 0;
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
              <button aria-label="Menu" onClick={props.hamburgerClick}>
                <div className="hamburger">
                  <span className="line" />
                  <span className="line" />
                  <span className="line" />
                </div>
              </button>
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