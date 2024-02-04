import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../images/Logo.svg'
import './NavBar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useCodeCollabContext } from "../../App";
const NavBar = () => { 
  const { cUser } = useCodeCollabContext(); 
   const [isNavOpen,setNavOpen] = useState(false) ;
  return ( 
      <header id="header" className=  "header" > 
      <figure>

          <img
            className="logo"
            alt="InterviewSync Logo" loading="lazy"
            src={Logo}
          />
      </figure>
      
          <div className= {isNavOpen?'nav-links navOpen nav-responsive':'nav-links'}> 
            {
              cUser?
              <NavLink  to= '/dashboard' className='nav-link'>Dashboard</NavLink>:
               <>
                <NavLink to='/login' className='nav-link btn-login'>  Login</NavLink>
                <NavLink  to= '/register' className='nav-link'>Register</NavLink> 
               </> 
            }
          </div>

          <div className='nav-responsive' >
            {
              isNavOpen?<RxCross2 className='nav-icon' onClick={()=>setNavOpen(false)} />:<RxHamburgerMenu className='nav-icon' onClick={()=>setNavOpen(true)}/> 
            } 
           </div>
      </header> 
  )
}

export default NavBar

 

