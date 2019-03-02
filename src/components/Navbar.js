import React, { Component } from 'react'
import { Link } from "gatsby"
import styled from "styled-components";

import Container from "../components/Container"
import Backdrop from './Backdrop';
import Logo from '../img/logos/luweb-logo-white.svg'
import BlueLogo from '../img/logos/luweb-logo-blueGradient.svg'

const StyledNav = styled.nav`
    display: flex;
    padding: 32px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
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
      @media (max-width: 576px) {
        display: none;
        margin-top: 60px;
        flex-direction: column;
        top: 0px;
        right: 0px;
      }
      ::before {
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
      a {
        margin: 0 20px;
      }
    }
    #menu.open ul {
      display: flex;
      position: fixed;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 60px;
      padding: 5px;
      border-radius: 5px;
      background-color: #f2f2f2;
      position: absolute;
      top: 20px;
      width: 100%;
      a {
        color: #333;
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
      font-size: 16px;
      @media(max-width: 576px) {
        font-size: 20px;
        padding: 10px;
      }
    }
    ul a {
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        height: 1px;
        background: linear-gradient(to right,#221C67,#00468F,#006DA9);
        transition: -webkit-transform .3s ease-in-out;
        transition: transform .3s ease-in-out;
        transform-origin: right top;
        transform: scaleX(0);
        @media (max-width: 576px) {
          display: none;
        }
      }
      &:hover {
        &:after {
          transform: scale(1);
          transform-origin: left top;
        }
      }
    }
    img {
      margin-bottom: 0px;
      width: 100px;
      height: auto;
      position: relative;
      z-index: 2;
    }
    a {
      display: inline-block;
      text-decoration: none;
      color: ${props => props.inverse ? props.theme.colors.blue : '#fff'};
      content: "";
      position: relative;
    }
    a.activeLink {
      &:after {
        transform: scale(1);
        transform-origin: left top;
      }
    }
    ::after {
      content: "";
      width: 100%;
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
      border-radius: 25px;
      background-color: #fff;
      opacity: 0.9;
      border: solid 1px #00468F;
      @media (min-width: 576px){
        display: none;
      }
    }
`

const StyledWaves = styled.div`
    #topwaves {
      display: block;
      width: 100%;
      height: 100px;
      transform: rotate(180deg);
      #path1 {
          animation: flow 10s infinite alternate ease-in-out;
          fill: #4D7A95;
          fill-opacity: 0.4;
      }
      #path2{
          animation: flow 15s infinite alternate ease-in-out;
          fill: #4D7A95;
          fill-opacity: 0.4;
      }
      #path3{
          animation: flow 20s infinite alternate ease-in-out;
          fill: #4D7A95;
          fill-opacity: 0.4;
      }
      @keyframes flow {
        0% {
          transform: translate(30%,0)
        }
        100% {
          transform: translate(-30%,0)
        }
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
        <Container>
          <StyledNav {...this.props}>
            <Link to="/"><img src={this.props.inverse ? BlueLogo : Logo} alt="luweb logo" /></Link>
            <div id="menu" className={this.state.menuOpen ? "open" : "closed"}>
              <button onClick={() => { this.setState({ menuOpen: !this.state.menuOpen }) }}>menu</button>
              {/* <Fade top opposite when={this.state.menuOpen}> */}
              <ul>
                <Link to="/over" activeClassName="activeLink">
                  <li>Over</li>
                </Link>
                <Link to="/diensten" activeClassName="activeLink">
                  <li>Diensten</li>
                </Link>
                <Link to="/realisaties" activeClassName="activeLink">
                  <li>Realisaties</li>
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
          </StyledNav >
        </Container>
        {this.props.inverse && !this.props.withoutWaves &&
          < StyledWaves >
            <svg id='topwaves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30" version="1.1" preserveAspectRatio="none">
              <path id="path1" d="m-100 1.041s61.625-4.5064 99.75 5.2333 70.594 15.391 124.5 16.312c55.25 0.9437 75.75-8.8513 75.75-8.8513v16.266h-300v-28.959z" />
              <path id="path2" d="m-100 30h300v-6.6791s-16.526 2.7112-62.25 2.3702c-58.5-0.436-97.875-12.245-153.75-15.599-55.875-3.3549-84-0.2745-84-0.2745v20.182z" />
              <path id="path3" d="m200 16.232s-24.625-5.6378-84.5-3.7495c-59.875 1.8882-74.962 15.943-144 16.562-50.75 0.455-71.5-3.7697-71.5-3.7697v4.7252h300v-13.768z" />
            </svg>
          </StyledWaves>
        }
      </div>
    )
  }
}

