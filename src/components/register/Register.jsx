import React from "react";
import './Register.css';

const Register = () => {
  return (
    <div className='getStarted-container'>
      <header className='getStarted-header'>
        <figure>
          <img src="https://codecollab-k6wq.onrender.com/assets/Logo-RdZz1ygO.svg" alt="logo" style={{ height: '5.1rem' }} />
        </figure>
      </header>
      
      <main className='main'> 
        <article className='getStarted-content'>
          <h1>Create account</h1>
          <p>We’ll personalize your setup experience accordingly.</p>
          <form className='form-registration'>
            <div className='form-registration-input'>
              <label>Business Email</label>
              <input type='text' className='registration-input' />
            </div>
  
            <div className='form-registration-input'>
              <label>Password</label>
              <input type='password' className='registration-input' />
            </div>
  
            <div className='form-registration-input'>
              <label>First Name</label>
              <input type='text' className='registration-input' />
            </div>
  
            <div className='form-registration-input'>
              <label>Last Name</label>
              <input type='text' className='registration-input' />
            </div>
   
            <div className='form-registration-input'>
              <label>Country</label>
              <select id="cars" name="cars" className='registration-input' style={{ height: '3.2rem' }}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select>
            </div>
  
            <div className='registration-btn'>
              <span>Start Trial</span>
            </div>
          </form>
        </article>
        <aside className='getStarted-aside' style={{ zIndex: 1000 }}>  
          <img src="https://i.ibb.co/CJBMwbG/register-side.png" alt="register-side" border="0"/> 
        </aside> 
      </main>
    </div>
  );
};

export default Register;
