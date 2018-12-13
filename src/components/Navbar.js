import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from "styled-components";

import Backdrop from './Backdrop';
import '../stylesheets/navbar.sass'
import Logo from '../img/luweb-logo-white.svg'
import BlueLogo from '../img/luweb-logo-blueGradient.svg'


const StyledNavContainer = styled.nav`
    margin-left: 10vw;
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 576px){
      width: 90vw;
      margin: 0 auto;
    }
    #menu {
      z-index: 1;
    }
    @media (min-width: 576px){
      .react-reveal {
        opacity: 1!important
       }
    }
    ul {
      margin: 0;
      list-style: none;
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      width: 60vw;
      @media (max-width: 576px) {
        display: none;
        margin-top: 60px;
        flex-direction: column;
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
    #menu.open ul {
      display: flex;
      position: fixed;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 50px;
      padding: 5px;
      border-radius: 5px;
      background-color: #f2f2f2;
      position: absolute;
      top: 20px;
      width: 90vw;
      a {
        color: #333;
      }
      li, li a {
        font-weight: bold;
        width: 100%
      }
      ::before {
        opacity: 1;
      }
      a.activeLink {
        color: #fff;
      }
      a.activeLink li {
        background-color: #4D7A95;
        border-radius: 5px;
      }
    }
    ul li {
      margin: 10px 0;
      padding: 10px;
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
      color: #00ff96;
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
    #menu button{
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
  };

  render() {
    return (
      <div>
        <Backdrop active={this.state.menuOpen} />
        <StyledNavContainer {...this.props}>
          <a href="/">
            <img src={this.props.inverse ? BlueLogo : Logo} alt="luweb logo" />
          </a>
          <div id="menu" className={this.state.menuOpen ? "open" : "closed"}>
            <button onClick={() => { this.setState({ menuOpen: !this.state.menuOpen }) }}>menu</button>
            {/* <Fade top opposite when={this.state.menuOpen}> */}
              <ul>
                <Link to="/" activeClassName="activeLink">
                  <li>Home</li>
                </Link>
                <Link to="/over" activeClassName="activeLink">
                  <li>Over Luweb</li>
                </Link>
                <Link to="/diensten" activeClassName="activeLink">
                  <li>Onze diensten</li>
                </Link>
                <Link to="/contact" activeClassName="activeLink">
                  <li>Contact</li>
                </Link>
                <Link to="/blog" activeClassName="activeLink">
                  <li>Blog</li>
                </Link>
              </ul>
            {/* </Fade> */}
          </div>
        </StyledNavContainer >
        {this.props.inverse &&
          <svg id='topwaves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30" version="1.1" preserveAspectRatio="none">
            <path id="path1" d="m-100 1.041s61.625-4.5064 99.75 5.2333 70.594 15.391 124.5 16.312c55.25 0.9437 75.75-8.8513 75.75-8.8513v16.266h-300v-28.959z" />
            <path id="path2" d="m-100 30h300v-6.6791s-16.526 2.7112-62.25 2.3702c-58.5-0.436-97.875-12.245-153.75-15.599-55.875-3.3549-84-0.2745-84-0.2745v20.182z" />
            <path id="path3" d="m200 16.232s-24.625-5.6378-84.5-3.7495c-59.875 1.8882-74.962 15.943-144 16.562-50.75 0.455-71.5-3.7697-71.5-3.7697v4.7252h300v-13.768z" />
          </svg>}
      </div>
    )
  }
}

