import React from "react";
import './Admin.css'
import { SlPeople } from "react-icons/sl";
import Logo from '../../images/LightLogo.svg'
const Admin = () => {
    
  return <section className="admin-container">
      <div className="leftMenu"> 
         <header  >
           <img src={Logo} style={{width:'80%'}} />
         </header> 
         <div className="navLinks">
          <div className="navLink">
            <SlPeople className="navLink-icon"/>
            <span>All Interview</span>
          </div>
         </div>
      </div>
      <div> 
        <section className="rightMenu"> Main Element</section>
      </div>

  </section>
};

export default Admin;
