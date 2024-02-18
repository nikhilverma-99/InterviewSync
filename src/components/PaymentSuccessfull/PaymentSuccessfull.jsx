import React from "react";
import './PaymentSuccessfull.css'
import { NavLink } from "react-router-dom";
import Logo from '../../images/Logo.svg'
import Tick from '../../images/icons8-tick.gif'
import Payment from '../../images/Payment.webp'
import { useNavigate ,useSearchParams} from "react-router-dom";
const Details = ({title,data})=>{
  
  return <div className="payment-detail">
    <span>{title}</span>
    <span style={{fontWeight:'500'}}>{data}</span> 
  </div>
}
const PaymentSuccessfull = () => {
  const searchQuery = JSON.parse(useSearchParams()[0].get("data")); 

  console.log(searchQuery);
  
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
            <h1 >Payment Successfull </h1>
            <span>Your payment for the InterviewSync plan was successfull !</span>
          </div>
          
          <img src={Tick} className='tick' alt="tick" style={{height:'75%'}}/>
        </div>
        
      </div>
      <div className="payment-details">
        <span style={{fontSize:'2.8rem',fontWeight:'500'}}>Transaction Details</span>
        <Details title='Payment Method :' data={searchQuery?.paymentMethod}/>
        <Details title='Transaction Id :' data={searchQuery?.transactionId}/>

      </div>

      <div className="payment-details">
        <span style={{fontSize:'2.8rem',fontWeight:'500'}}>Payment Details</span>
        <Details title='Amount :' data={`$ ${searchQuery.totalAmount}`}/>
        <Details title='Plan Name :' data={searchQuery?.planName}/>

      </div>

      <div className="payment-salutation">
        <span>Thanks for choosing InterviewSync !</span>
      </div>

      <div className="btn-takeToDashboard" onClick={()=>{navigate('/dashboard')}}>
        <span>Access Your Dashboard</span>
      </div>
   </div>
   <figure style={{height:'54rem'}}>
    <img src={Payment} alt="payment-succesfull-cartoon" style={{height:'100%'}}/>
   </figure>
  </main>
   
</div>
};

export default PaymentSuccessfull;
