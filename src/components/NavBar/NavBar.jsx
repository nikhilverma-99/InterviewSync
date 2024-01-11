import React from 'react'
import Logo from '../../images/Logo.svg'
import './NavBar.css'
const NavBar = () => { 
  if(process.env.COLLAB_BACKEND_LINK){
    console.log(process.env.COLLAB_BACKEND_LINK)
  }
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

 

