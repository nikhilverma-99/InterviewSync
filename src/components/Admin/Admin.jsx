import React from "react";
import './Admin.css'
import { Outlet ,NavLink} from "react-router-dom";
import { SlPeople } from "react-icons/sl";
import { IoIosCreate } from "react-icons/io";
import Logo from '../../images/LightLogo.svg'
import { LuLayoutDashboard } from "react-icons/lu";
const Admin = () => {
    
  return <main className="admin-container">
      <div className="leftMenu"> 
         <header >
           <img src={Logo} style={{width:'70%', marginBottom:'1.1rem'}} />
           <div className="divider">&nbsp;</div>
         </header>  
         <div className="navLinks">
         <NavLink to='/dashboard' className={({ isActive }) =>
            isActive ? 'admin-btn active' : 'admin-btn'}>
            <LuLayoutDashboard className="navLink-icon" />
            <span>DashBoard</span>
        </NavLink>

         <NavLink to='allInterview' className={({ isActive }) =>
              isActive ? 'admin-btn active' : 'admin-btn'
            }>
 
              <SlPeople className="navLink-icon"/>
              <span>All Interview</span>
        
         </NavLink>

         <NavLink to='createInterview' className={({ isActive }) =>
              isActive ? 'admin-btn active' : 'admin-btn'
            }> 
       
              <IoIosCreate className="navLink-icon"/>
              <span>Create Interview</span>
             
         </NavLink>

         </div>
      </div>
      <div> 
        <nav className="admin-navbar">DashBoard</nav>
        <section className="rightMenu">  
         <Outlet/>
        </section>
      </div>

  </main>
};

export default Admin;
