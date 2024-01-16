import React from "react";
import './Admin.css'
import { SlPeople } from "react-icons/sl";
import { IoIosCreate } from "react-icons/io";
import Logo from '../../images/LightLogo.svg'
const Admin = () => {
    
  return <section className="admin-container">
      <div className="leftMenu"> 
         <header >
           <img src={Logo} style={{width:'70%', marginBottom:'1.1rem'}} />
           <div className="divider">&nbsp;</div>
         </header>  
         <div className="navLinks">

         <div className="navLink navLink-active">
            <SlPeople className="navLink-icon"/>
            <span>All Interview</span>
          </div>

          <div className="navLink">
            <IoIosCreate className="navLink-icon"/>
            <span>Create Interview</span>
          </div>

         </div>
      </div>
      <div> 
        <nav className="admin-navbar">DashBoard</nav>
        <section className="rightMenu"> Main Element</section>
      </div>

  </section>
};

export default Admin;
