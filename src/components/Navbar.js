import React, { Component } from 'react'
import Link from 'gatsby-link'
import Logo from '../img/luweb-logo-white.svg'
import BlueLogo from '../img/luweb-logo-blueGradient.svg'
import styled from "styled-components";

const NavContainer = styled.div`
    margin: auto;
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    ul {
      margin: 0;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 60vw;
      @media (max-width: 576px) {
        display: none;
        margin: 30px 0;
        flex-direction: column;
        position: absolute;
        top: 0px;
        right: 0px;
      }
      ::before {
        /* content: ""; */
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(14,30,37,.54);
        z-index: -1;
        opacity: 0;
        transition: opacity 0ms ease 0s;
      }
    }
    ul.open {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      margin-top: 50px;
      height: 50vh;
      padding: 5px;
      border-radius: 5px;
      background-color: #f2f2f2;
      position: absolute;
      top: 20px;
      width: 80vw;
      a {
        color: #333;
      }
      li a {
        font-weight: bold;
      }
      ::before {
        opacity: 1;
      }
    }
    ul.links li {
      margin: 0;
    }
    img {
      margin-bottom: 0px;
      width: 100px;
      height: auto;
      position: relative;
      z-index: 2;
      margin: 20px;
    }
    a {
      display: inline-block;
      text-decoration: none;
      color: ${props => props.inverse ? '#162866' : '#fff'};
      font-family: 'Segoe UI';
    }
    a.activeLink {
      color: #5AD3A1;
    }
    ::after {
      content: "";
      width: 80vw;
      display: block;
      position: absolute;
      height: 2px;
      background-image: ${props => props.inverse ? 'linear-gradient(-90deg,rgba(14,30,37,0) 0,#0e1e25 5%,#0e1e25 90%,rgba(14,30,37,0) 100%)' : 'linear-gradient(-90deg,rgba(255,255,255,0) 0,#fff 5%,#fff 90%,rgba(255,255,255,0) 100%)'};
      opacity: .08;
      bottom: 0;
    }
    #togglemenu {
      color: #333;
      padding: 10px 20px;
      border-radius: 10px;
      background-color: #fff;
      opacity: 0.9;
      @media (min-width: 576px){
        display: none;
      }
    }
`

export default class Navbar extends Component {
  state = {
    menuOpen: false
  }

  render() {
    return (
      <NavContainer {...this.props}>
        <a href="/">
          <img src={this.props.inverse ? BlueLogo : Logo} alt="luweb logo" />
        </a>
        <div onClick={() => this.setState({ menuOpen: !this.state.menuOpen })} id="togglemenu">menu</div>
        <ul className={this.state.menuOpen ? "open" : "closed"}>
          <li>
            <Link to="/" exact activeClassName="activeLink">Home</Link>
          </li>
          <li>
            <Link to="/over" activeClassName="activeLink">Over Luweb</Link>
          </li>
          <li>
            <Link to="/diensten" activeClassName="activeLink">Onze diensten</Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="activeLink">Contact</Link>
          </li>
          <li>
            <Link to="/blog" activeClassName="activeLink">Blog</Link>
          </li>
        </ul>
      </NavContainer>
    )
  }
}

