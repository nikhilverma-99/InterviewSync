import React, {useState, useEffect} from "react";
import './Register.css';

import Select from 'react-select'; 
import * as api from '../../Axios'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import LoadingIcons from 'react-loading-icons'
import { NavLink } from "react-router-dom";
import RegisterSide from '../../images/register-side.png'
import Logo from '../../images/Logo.svg'
const Register = () => {

  const [page,setPage] = useState(0)
  const [allCountries,setAllCountries] = useState([]) ;
  const [isLoading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    businessName: '',
    businessEmail: '',
    logo: null, // Assuming logo is a file, initialize with null
    companyWebsite: '',
    country: null, // Assuming country is selected from a dropdown, initialize with null
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    GSTIN: '',
    name: '',
    email: '',
    password: '',
    position: '',
    phoneNumber: '',
  });

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
  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleFileChange = (e) => {
  const { name, files } = e.target;
  setFormData({
    ...formData,
    [name]: files[0], // Assuming it's a single file upload
  });
};

const handleCountryChange = (selectedOption) => {
  setFormData({
    ...formData,
    country: selectedOption,
  });
};

const handleRegister = async()=>{ 
setLoading(true)
  try {
    const form = new FormData();
    const data = {...formData,country:formData.country.value,logo:undefined};  
    form.append('data',JSON.stringify(data)) ;
    form.append('file',formData.logo); 
    await api.companyRegister(form);
  } catch (error) {
    console.log(error); 
  }  
  setLoading(false)
}
  const getStartedComponent =[
  <article className='getStarted-content'>
    <h1>Create account</h1>
    <p>We’ll personalize your setup experience accordingly.</p>
    <form className='form-registration'>
      <div className='form-registration-input'>
              <label>Business Name</label>
              <input type='text' className='registration-input' name='businessName' onChange={handleInputChange} value={formData.businessName}/>
      </div>

      <div className='form-registration-input'>
        <label>Business Email</label>
        <input type='text' className='registration-input' name='businessEmail' onChange={handleInputChange} value={formData.businessEmail}/>
      </div>

      <div className='form-registration-input'>
        <label>Logo</label>
        <input type='file' className='registration-input' name='logo' onChange={handleFileChange}/>
      </div> 

      <div className='form-registration-input'>
        <label>Company Website</label>
        <input type='text' className='registration-input' name='companyWebsite' onChange={handleInputChange} value={formData.companyWebsite}/>
      </div>

      <div className='form-registration-input'>
        <label>Country</label>
        <Select
        id="countries"
        name="countries"
        className='registration-input-select'
        styles={{ control: styles => ({ ...styles, border:'nonee' }) }}
        options={allCountries.map((val) => ({ value: val.name, label: val.name }))}
        value={formData.country}
        onChange={handleCountryChange}
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
                <label>Street </label>
                <input type='text' className='registration-input' name='streetAddress' onChange={handleInputChange} value={formData.streetAddress} />
              </div>
    
              <div className='form-registration-input'>
                <label>City</label>
                <input type='email' className='registration-input' name='city' onChange={handleInputChange} value={formData.city}/>
              </div>
    
              <div className='form-registration-input'>
                <label>State </label>
                <input type='text' className='registration-input' name='state' onChange={handleInputChange} value={formData.state} />
              </div>
    
              <div className='form-registration-input'>
                <label>Zip Code</label>
                <input type='text' className='registration-input' name='zipCode' onChange={handleInputChange} value={formData.zipCode}/>
              </div>
    
              <div className='form-registration-input'>
                <label>GSTIN</label>
                <input type='text' className='registration-input' name='GSTIN' onChange={handleInputChange} value={formData.GSTIN}/> 
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
            <input type='text' className='registration-input' name='name' onChange={handleInputChange} value={formData.name}/>
          </div>

          <div className='form-registration-input'>
            <label>Email</label>
            <input type='email' className='registration-input' name='email' onChange={handleInputChange} value={formData.email}/>
          </div>

          <div className='form-registration-input'>
            <label>Password</label>
            <input type='password' className='registration-input' name='password'  onChange={handleInputChange} value={formData.password}/>
          </div>

          <div className='form-registration-input'>
            <label>Position</label>
            <input type='text' className='registration-input' name='position'  onChange={handleInputChange} value={formData.position}/>
          </div>

          <div className='form-registration-input'>
            <label>Phone Number</label>
            <input type='number' className='registration-input' name='phoneNumber' onChange={handleInputChange} value={formData.phoneNumber} />
            
          </div>

          {
            isLoading?<div className='registration-btn' style={{backgroundColor:'#45be41'}} >
               <LoadingIcons.TailSpin style={{height: '140%'}}/>
           </div>
           :
           <div className='registration-btn' style={{backgroundColor:'#45be41'}} onClick={handleRegister}>
            <span>Register</span>
            </div>
          } 
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
        <NavLink to='/'>
          <figure>
            <img src= {Logo} alt="logo" style={{ height: '5.1rem' }} />
          </figure> 
        </NavLink>
      </header> 
      <main className='main'> 
      <div className="row" style={{width:'100%'}}>

      <div  style={{fontSize:'3.6rem',alignSelf:'flex-start',margin:'5.6rem 1.1rem 0 0',width:'4rem'}}>

      { page!=0?<IoArrowBackCircleOutline className="back-btn" onClick={handlePageDec}/>:null }
      </div>
      {  getStartedComponent[page] }
      </div>
        <aside className='getStarted-aside' style={{ zIndex: 1000, paddingLeft:'4.4rem' }}>  
          <img src= {RegisterSide} alt="register-side" border="0" /> 
        </aside> 
      </main>
    </div>
  );
};

export default Register;
