import React from "react";
import   './CreateInterview.css';
import { FaIdCard } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
const CreateInterview = () => {
  return <><section class="interview-Info">
  <div class="information">
    <div class="form-heading">
      <span>Candidate Details</span>
    </div>
    <form class="form-fields">
      <div class="form-field">
        <div className="label-icon">
          <FaIdCard className="label-icon"/>
        <label>Name:</label>
        </div>
      <input placeholder="Name" type="text" class="form-input"/>
      </div>
        <div class="form-field">
        <div className="label-icon">
          <MdOutlineMarkEmailRead/>
           <label>Email:</label>
        </div>

        <input placeholder="Email" type="email" class="form-input"/>
      </div>
        <div class="form-field">
        <div className="label-icon">
           <FaRankingStar/>
           <label>Position:</label>
        </div>
        <input placeholder="Position" type="text" class="form-input"/>
      </div>
      
        <div class="form-field">
        <div className="label-icon">
          <MdOutlineContactPage/>
           <label>Resume:</label>
        </div>
          
        <input placeholder="Resume" type="file" class="form-input"/>
      </div>
    </form>
  </div>
  <div class="information">
    <div class="form-heading">
      <span>Interviewer Details</span>
    </div>
    <form class="form-fields">
      <div class="form-field">
      <div className="label-icon">
          <FaIdCard className="label-icon"/>
        <label>Name:</label>
        </div>
      <input placeholder="Name" type="text" class="form-input"/>
      </div>
        <div class="form-field">
        <div className="label-icon">
          <MdOutlineMarkEmailRead/>
           <label>Email:</label>
        </div>
        <input placeholder="Email" type="email" class="form-input"/>
      </div>
        <div class="form-field"> 
           <div className="label-icon">
          <CiCalendarDate/>
           <label>Interview Date:</label>
        </div>
        <input placeholder="Date" type="date" class="form-input"/>
      </div>
      <div class="form-field">
      <div className="label-icon">
          <IoIosTimer/>
           <label>Interview Time:</label>
        </div>
        <input placeholder="Date" type="time" class="form-input"/>
      </div>
         
    </form>
  </div> 
  
</section>
<div className="create-btn-div">
    <div className="btn create-interview">
      <span>Create Interview</span>
    </div>
  </div>
</>
};

export default CreateInterview;
