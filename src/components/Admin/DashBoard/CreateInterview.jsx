import React,{useState} from "react";
import   './CreateInterview.css';
import { FaIdCard } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineContactPage } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import * as api from '../../../Axios'
const CreateInterview = () => { 
  const [candidate, setCandidate] = useState({
    name: "",
    email: "",
    position: "",
    resume: ""
  });

  const [interviewer, setInterviewer] = useState({
    name: "",
    email: "",
    date: new Date(),
    time: ""
  });

  // Event handler for updating Candidate details
  const handleCandidateChange = (e) => {
    const { name, value } = e.target;

    if(name==='resume')
    {
      setCandidate((prevCandidate) => ({
        ...prevCandidate,
        [name]: e.target.files[0]
      }));
      return;
    }
    setCandidate((prevCandidate) => ({
      ...prevCandidate,
      [name]: value
    }));
  };

  const handleInterviewerChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setInterviewer((prevCandidate) => ({
      ...prevCandidate,
      [name]: value
    }));
  };
 
  const createInterview = async()=>{  
    const formData = new FormData() ; 
    const interviewData = {
      inv_email:interviewer.email,
      can_email:candidate.email,
      role:candidate.position,
      date:interviewer.date,
      time:interviewer.time,
      company:"Amazon"
    }
    formData.append('data',JSON.stringify(interviewData))    
    formData.append('file', candidate.resume ) ; 

    const resumeUpload = api.createInterview(formData)
    console.log(resumeUpload);
    
    console.log("Upload Function finished !");
    
  }

  return <>
  <section class="interview-Info">
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
      <input placeholder="Name" name="name" type="text" onChange={handleCandidateChange} class="form-input"/>
      </div>
        <div class="form-field">
        <div className="label-icon">
          <MdOutlineMarkEmailRead/>
           <label>Email:</label>
        </div>

        <input placeholder="Email" name="email" type="email" onChange={handleCandidateChange} class="form-input"/>
      </div>
        <div class="form-field">
        <div className="label-icon">
           <FaRankingStar/>
           <label>Position:</label>
        </div>
        <input placeholder="Position" name="position" type="text" onChange={handleCandidateChange} class="form-input"/>
      </div>
      
        <div class="form-field">
        <div className="label-icon">
          <MdOutlineContactPage/>
           <label>Resume:</label>
        </div> 
        <input placeholder="Resume" name="resume" type="file" onChange={handleCandidateChange} class="form-input"/>
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
      <input placeholder="Name" name="name" onChange={handleInterviewerChange} type="text" class="form-input"/>
      </div>
        <div class="form-field">
        <div className="label-icon">
          <MdOutlineMarkEmailRead/>
           <label>Email:</label>
        </div>
        <input placeholder="Email" name="email" onChange={handleInterviewerChange} type="email" class="form-input"/>
      </div>
        <div class="form-field"> 
           <div className="label-icon">
          <CiCalendarDate/>
           <label>Interview Date:</label>
        </div>
        <input placeholder="Date" name="date" onChange={handleInterviewerChange} min={new Date().toISOString().split('T')[0]} type="date" class="form-input"/>
      </div>
      <div class="form-field">
      <div className="label-icon">
          <IoIosTimer/>
           <label>Interview Time:</label>
        </div>
        <input placeholder="Date" name="time" onChange={handleInterviewerChange} type="time" class="form-input"/>
      </div>
         
    </form>
  </div> 
  
</section>
<div className="create-btn-div" onClick={createInterview}>
    <div className="btn create-interview">
      <span>Create Interview</span>
    </div>
  </div>
</>
};

export default CreateInterview;
