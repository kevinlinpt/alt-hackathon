import React from 'react'
import Logo from '../images/reddit_logo.png' 
import './Navbar.scss'

function Navbar() {
  return (
    <div className="nav-bar">
      <img className="logo" src={Logo}></img>
    </div>
  )
}

export default Navbar