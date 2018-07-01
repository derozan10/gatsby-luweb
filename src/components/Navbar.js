import React from 'react'
import Link from 'gatsby-link'
import Logo from '../img/luweb-logo-white.svg'
import BlueLogo from '../img/luweb-logo-blue.svg'

const Navbar = (props) => {
  const activeLink = {
    color: '#5AD3A1'
  }

  const navLink = {
    textDecoration: 'none',
    color: props.color === "inverse" ? '#162866' : '#fff',
    fontFamily: 'Segoe UI'
  }

  const navContainer = {
    margin: '0 auto',
    maxWidth: '80vw',
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2
  }

  const logoStyle = {
    marginBottom: '0px',
    width: '100px',
    height: 'auto'
  }

  const line = {
    width: '80vw',
    background: 'linear-gradient(-90deg,rgba(255,255,255,0) 0,rgba(255,255,255,0.3) 5%,rgba(255,255,255,0.3) 90%,rgba(255,255,255,0) 100%)',
    height: '0.5px',
    margin: '0 auto'
  }

  return (
    <div >
      <nav style={navContainer}>
        <img src={props.color === 'inverse' ? BlueLogo : Logo} alt="luweb logo" style={logoStyle} />
        <Link to="/" exact style={navLink} activeStyle={activeLink}>Home</Link>
        <Link to="/over" style={navLink} activeStyle={activeLink}>Over Luweb</Link>
        <Link to="/diensten" style={navLink} activeStyle={activeLink}>Onze diensten</Link>
        <Link to="/contact" style={navLink} activeStyle={activeLink}>Contact</Link>
        <Link to="/blog" style={navLink} activeStyle={activeLink}>Blog</Link>
      </nav>
      <hr style={line} />
    </div>
  )

}

export default Navbar
