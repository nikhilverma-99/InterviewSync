import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../images/Logo.svg'
import './NavBar.css'
const NavBar = () => { 
   
  return ( 
      <header id="header" className=  "header" > 
      <figure>

          <img
            className="logo"
            alt="InterviewSync Logo" loading="lazy"
            src={Logo}
          />
      </figure>
          <div className='nav-links'> 
            <NavLink to='/login' className='nav-link btn-login'>  Login</NavLink>
            <NavLink  to= '/register' className='nav-link'>Register</NavLink> 
          </div>
      </header> 
  )
}

export default NavBar

 

