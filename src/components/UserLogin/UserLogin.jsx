import React,{useState} from "react";
import './UserLogin.css'
import { NavLink } from "react-router-dom";
import loginCartoon from '../../images/loginPage.webp'
import Logo from '../../images/Logo.svg';
import * as api from '../../Axios'
import LoadingIcons from 'react-loading-icons'

const UserLogin = () => {
  const[loading,setLoading] = useState(false)
  const[credentials,setCredentials] = useState({
    email:"",
    password:""
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async()=>{

    setLoading(true)
    try{
      await api.login(credentials);

    }
     catch(e){

     }
     setLoading(false)
    
  }
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
            <input type='text' className='login-input' name='email' value={credentials.email} onChange={handleInputChange} />
          </div>
          <div className='form-login-input'>
            <label> Password</label>
            <input type='password' className='login-input' name='password' value = {credentials.password} onChange={handleInputChange} />
          </div>
          {
            loading? <div className='login-btn'  >
             <LoadingIcons.Oval style={{width:'2.4rem'}} />
          </div>:<div className='login-btn' onClick={handleLogin} >
            <span>Login</span>
          </div>
          }
         
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
        
       </div>
       <figure className="login-cartoon-container">
          <img src={loginCartoon} alt='Interview Sync Cartoon' className="cartoon-img"/>
        </figure>
      </section>
};

export default UserLogin;
