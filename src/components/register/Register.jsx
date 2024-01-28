import React, {useState, useEffect} from "react";
import './Register.css';

import Select from 'react-select'; 
import * as api from '../../Axios'
import { IoArrowBackCircleOutline } from "react-icons/io5";
const Register = () => {

  const [page,setPage] = useState(0)
  const [allCountries,setAllCountries] = useState([]) ;
  const handlePageChange = ()=>{
    console.log('sdfsdfsfdsdf');
    setPage((prev)=>{
      
      if(prev==2) return ;
      return prev+1;
    })
  }

  const handlePageDec = ()=>{
    setPage((prev)=>{
      
      if(prev==0) return ;
      return prev-1;
    })
  }
  const getStartedComponent =[
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
    <Select
  id="countries"
  name="countries"
  className='registration-input-select'
  styles={{ control: styles => ({ ...styles, border:'nonee' }) }}
  options={allCountries.map((val) => ({ value: val.name, label: val.name }))}
/>
  </div>

  <div className='registration-btn' onClick={handlePageChange}>
    <span>Next</span>
  </div>
</form>
</article>,
<article className='getStarted-content'>
          <h1>Business Information</h1>
          <p> &nbsp; </p>
          <form className='form-registration'>
            <div className='form-registration-input'>
              <label>Street</label>
              <input type='text' className='registration-input' />
            </div>
  
            <div className='form-registration-input'>
              <label>City</label>
              <input type='email' className='registration-input' />
            </div>
  
            <div className='form-registration-input'>
              <label>State </label>
              <input type='text' className='registration-input' />
            </div>
  
            <div className='form-registration-input'>
              <label>Zip Code</label>
              <input type='text' className='registration-input' />
            </div>
   
            <div className='form-registration-input'>
              <label>GSTIN</label>
              <input type='text' className='registration-input' />
               
            </div>
  
            <div className='registration-btn' onClick={handlePageChange}>
              <span>Next</span>
            </div>
          </form>
</article>,
<article className='getStarted-content'>
      <h1>Representative Information </h1>
      <p> &nbsp; </p>
      <form className='form-registration'>
        <div className='form-registration-input'>
          <label>Name</label>
          <input type='text' className='registration-input' />
        </div>

        <div className='form-registration-input'>
          <label>Email</label>
          <input type='password' className='registration-input' />
        </div>

        <div className='form-registration-input'>
          <label>Password</label>
          <input type='text' className='registration-input' />
        </div>

        <div className='form-registration-input'>
          <label>Position</label>
          <input type='text' className='registration-input' />
        </div>

        <div className='form-registration-input'>
          <label>Phone Number</label>
          <input type='text' className='registration-input' />
           
        </div>

        <div className='registration-btn' style={{backgroundColor:'#0BDA51'}}>
          <span>Register</span>
        </div>
      </form>
</article>
]

const getAllCountries = async()=>{
  const countries = await api.getAllCountries();
  console.log(countries[0].name);
  
  setAllCountries(countries);
}
useEffect(()=>{ 
  getAllCountries();
},[])
  return (
    <div className='getStarted-container'>
      <header className='getStarted-header'>
        <figure>
          <img src="https://codecollab-k6wq.onrender.com/assets/Logo-RdZz1ygO.svg" alt="logo" style={{ height: '5.1rem' }} />
        </figure>
      </header> 
      <main className='main'> 
      <div  style={{fontSize:'3.6rem',alignSelf:'flex-start',margin:'5.6rem 1.1rem 0 0',width:'4rem'}}>

      { page!=0?<IoArrowBackCircleOutline className="back-btn" onClick={handlePageDec}/>:null }
      </div>
      {  getStartedComponent[page] }
        <aside className='getStarted-aside' style={{ zIndex: 1000, paddingLeft:'4.4rem' }}>  
          <img src="https://i.ibb.co/CJBMwbG/register-side.png" alt="register-side" border="0"/> 
        </aside> 
      </main>
    </div>
  );
};

export default Register;
