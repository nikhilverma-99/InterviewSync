import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../images/Logo.svg'
import './NavBar.css'
const NavBar = () => { 
   
  return ( 
      <header id="header" className=  "header" > 
          <img
            className="logo"
            alt="CodeCollab logo" loading="lazy"
            src={Logo}
          />
          <div className='nav-links'> 
            <NavLink  to= '/register' className='nav-link'>Register</NavLink> 
            <NavLink to='/login' className='nav-link'>  Login</NavLink>
          </div>
      </header> 
  )
}

export default NavBar

 

