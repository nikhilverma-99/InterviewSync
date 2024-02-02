import React from "react";
import './UserLogin.css'
import { NavLink } from "react-router-dom";
import loginCartoon from '../../images/loginPage.webp'
import Logo from '../../images/Logo.svg';
const UserLogin = () => {
  return <section class='login-container'>
       <div className="login-left">
        <header className="login-left-header">
          <figure className="header-image">
            <img src={Logo} alt="Logo"/>
          </figure>
        </header>
        <div className="login-heading">
          <span>Login</span>
        </div>
        <form className="login-form">
          <div className='form-login-input'>
            <label> Email</label>
            <input type='text' className='login-input' name='businessEmail' />
          </div>
          <div className='form-login-input'>
            <label> Password</label>
            <input type='password' className='login-input' name='businessEmail' />
          </div>
          <div className='login-btn' >
            <span>Login</span>
          </div>
        </form>
        <div className="other-option">
          <NavLink className='otherOption-link' to='/forgotPassword'>Forgot Password</NavLink>
          <NavLink className='otherOption-link'  to='/register'>Register</NavLink>

        </div>
       </div>
       <div className="login-right">
        <article>
          <p> Welcome Back !</p>
          <span>Sign in to continue your seamless experience.</span>
        </article>
        <figure className="login-cartoon-container">
          <img src={loginCartoon} alt='Interview Sync Cartoon' className="cartoon-img"/>
        </figure>
       </div>

      </section>
};

export default UserLogin;
