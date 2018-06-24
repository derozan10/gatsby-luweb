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

  const headerStyle = {
    marginBottom: '1.45rem',
    background: '0 0',
    backgroundSize: '120% 100vh',
    backgroundRepeat: 'no-repeat',
    padding: '5px'
  }

  const navContainer = {
    margin: '0 auto',
    maxWidth: 960,
    padding: '10px 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

  const logoStyle = {
    marginBottom: '0px',
    width: '100px',
    height: 'auto'
  }

  return (
    <div style={headerStyle}>
      <nav style={navContainer}>
        <img src={props.color === 'inverse' ? BlueLogo : Logo} alt="luweb logo" style={logoStyle} />
        <Link to="/" exact style={navLink} activeStyle={activeLink}>Home</Link>
        <Link to="/over" style={navLink} activeStyle={activeLink}>Over Luweb</Link>
        <Link to="/diensten" style={navLink} activeStyle={activeLink}>Onze diensten</Link>
        <Link to="/blog" style={navLink} activeStyle={activeLink}>Blog</Link>
      </nav>
    </div>
  )

}

export default Navbar
