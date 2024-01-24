import React from "react";
import   './CreateInterview.css';


const CreateInterview = () => {
  return <><section class="interview-Info">
  <div class="information">
    <div class="form-heading">
      <span>Candidate Details</span>
    </div>
    <form class="form-fields">
      <div class="form-field">
        <label>Name:</label>
      <input placeholder="Name" type="text" class="form-input"/>
      </div>
        <div class="form-field">
           <label>Email:</label>
        <input placeholder="Email" type="email" class="form-input"/>
      </div>
        <div class="form-field">
           <label>Position:</label>
        <input placeholder="Position" type="text" class="form-input"/>
      </div>
      
        <div class="form-field">
           <label>Resume:</label>
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
        <label>Name:</label>
      <input placeholder="Name" type="text" class="form-input"/>
      </div>
        <div class="form-field">
           <label>Email:</label>
        <input placeholder="Email" type="email" class="form-input"/>
      </div>
        <div class="form-field">
           <label>Interview Date:</label>
        <input placeholder="Date" type="date" class="form-input"/>
      </div>
      <div class="form-field">
           <label>Interview TIme:</label>
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
