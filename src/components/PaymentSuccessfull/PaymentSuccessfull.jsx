import React from "react";
import './PaymentSuccessfull.css'
import { NavLink } from "react-router-dom";
import Logo from '../../images/Logo.svg'
import Tick from '../../images/icons8-tick.gif'
import Payment from '../../images/Payment.webp'
import { useNavigate } from "react-router-dom";
const Details = ({title,data})=>{
  
  return <div className="payment-detail">
    <span>{title}</span>
    <span style={{fontWeight:'500'}}>{data}</span> 
  </div>
}
const PaymentSuccessfull = () => {
  const navigate = useNavigate();
  return   <div className='paymentSuccessfull-container'>
  <header className='paymentSuccessfull-header'>
    <NavLink to='/'>
      <figure>
        <img src= {Logo} alt="logo" style={{ height: '5.1rem' }} />
      </figure> 
    </NavLink>
  </header>  
  <main className="payment-main">
   <div className="payment-content-container">
      <div className="payment-content">
        <div className="payment-heading">

          <div className="payment-heading-content">
            <h1 style={{fontSize:'4.5rem'}}>Payment Successfull </h1>
            <span>Your payment for the InterviewSync plan was successfull !</span>
          </div>
          
          <img src={Tick} alt="tick" style={{height:'100%'}}/>
        </div>
        
      </div>
      <div className="payment-details">
        <span style={{fontSize:'2.8rem',fontWeight:'500'}}>Transaction Details</span>
        <Details title='Payment Method :' data='Card'/>
        <Details title='Transaction Id :' data='pay_NWrwXHFj04i2CN'/>

      </div>

      <div className="payment-details">
        <span style={{fontSize:'2.8rem',fontWeight:'500'}}>Payment Details</span>
        <Details title='Amount :' data='$49'/>
        <Details title='Plan Name :' data='Premium'/>

      </div>

      <div className="payment-salutation">
        <span>Thanks for choosing InterviewSync !</span>
      </div>

      <div className="btn-takeToDashboard" onClick={()=>{navigate('/dashboard')}}>
        <span>Access Your Dashboard</span>
      </div>
   </div>
   <figure style={{height:'100%'}}>
    <img src={Payment} alt="payment-succesfull-cartoon" style={{height:'100%'}}/>
   </figure>
  </main>
   
</div>
};

export default PaymentSuccessfull;
