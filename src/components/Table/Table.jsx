import React, { useState, useEffect } from "react";
import "./Table.css";
import * as api from '../../Axios'
import { MdModeEdit,MdDelete } from "react-icons/md"; 
const Table = () => {
 
  const [allInterview, setAllInterview] = useState([])
 
  

  const getAllInterviews = async()=>{
    try {
      
      const interviewsData = await api.getAllInterview();
      console.log(interviewsData)
      console.log(interviewsData.data);
      
      if(interviewsData.data)
      {
        console.log(interviewsData.data);
        
        setAllInterview(interviewsData.data);
      }
    } catch (error) {
      console.log(error);
      
    }

    
  }
 const statusBackground ={
  pending:'#00224480', selected:'#0b66236e', declined:'#9600185c'
 }
 const statusColor ={
  pending:'#002244', selected:'#075e1e', declined:'#960018'
 } 
  useEffect(()=>{
    getAllInterviews();
  },[])
  

  return (
    <section className="table-container">
  
      <table className="content-table">
        <thead>
          <tr>
             <th>S.No</th>
             <th>Candidate Email</th> 
             <th>Interviewer Email</th> 
             <th>Job Role</th> 
             <th>Date</th> 
             <th>Time</th> 
             <th>Status</th> 
             <th> </th> 
             <th> </th>  
          </tr>
        </thead>

        <tbody>
          {allInterview && allInterview?.map((val, index) => {
            // Convert val.time to a Date object  
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.can_email}</td>
                <td>{val.inv_email}</td>
                <td>{val.role}</td>
                <td>  
                <input placeholder="Date" disabled="true" name="date" value={new Date(val.date).toISOString().split('T')[0]} type="date"  style={{fontFamily: 'Rubik,sans-serif', border: 'none',padding: '1.1rem',background:'inherit',color: 'black'}}/>
                </td>
                <td>  
                <input placeholder="Time" name="time" disabled='true' type="time" value={val.time} style={{fontFamily: 'Rubik,sans-serif', border: 'none' ,background:'inherit',color: 'black'}}/>

                </td>
                <td>
                  <span style={{textTransform:'capitalize',backgroundColor:`${statusBackground[val.status]}`,color:`${statusColor[val.status]}`,padding: '0.4rem 1rem',borderRadius:'100px'}}>{val.status}</span>
                </td>
                <td id={val._id}><MdModeEdit style={{fontSize:'2.2rem',color:'#071e26'}}/></td>
                <td id={val._id}><MdDelete style={{fontSize:'2.2rem',color:'#071e26'}}/></td>
              </tr>
            );
          })}
        </tbody>
      </table> 
    </section>
  );
};

export default Table;
    