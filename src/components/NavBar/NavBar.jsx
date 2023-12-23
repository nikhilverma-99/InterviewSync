import React from 'react'
import Logo from '../../images/Logo.png'
import './NavBar.css'
const NavBar = () => {
  return ( 
      <header id="header" className=  "header" > 
          <img
            className="logo"
            alt="CodeCollab logo" loading="lazy"
            src={Logo}
          /> 
      </header> 
  )
}

export default NavBar

 

