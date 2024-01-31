import React from "react";
import './UserLogin.css'
const UserLogin = () => {
  return <section class='login-popup-container'>
  <div class='login-popup'>
    <div class='popup-left'> 
      
      <header class='left-header'>
        <figure>
          <img src='https://interviewsync.in/assets/LightLogo-Zon_Ywxe.svg'  class='left-header-logo'/>
        </figure>
      </header> 
       
    </div>
    <div class='popup-right'>
      
      <div class='rightHeading'>
       <h1>Login</h1>
        <p>Welcome back!  </p>
        <p>Sign in to continue your seamless experience.</p>
      </div>
      
      
      <form class='login-form'>
        <div class='form-registration-input'>
          <label> Email</label>
          <input type='text' class='registration-input'/>
        </div>
        <div class='form-registration-input'>
          <label>  Password</label>
          <input type='password' class='registration-input'/>
        </div>
        
         <div class='registration-btn'>
          <span>Login</span>
        </div>
      </form>
    </div> 
  </div>
</section>
};

export default UserLogin;
