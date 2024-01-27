import React, { useState, useEffect } from "react";
import "./Table.css";
import * as api from '../../Axios' 
const Table = () => {
 
  const [allInterview, setAllInterview] = useState([])
 
  

  const getAllInterviews = async()=>{
    const interviewsData = await api.getAllInterview();
    console.log(interviewsData.data);
    
    if(interviewsData.data)
    {
      console.log(interviewsData.data);
      
      setAllInterview(interviewsData.data);
    }

    
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
          {allInterview?.map((val, index) => (
            <tr key={index}>
             <td>{index+1}</td>
             <td>{val.can_email}</td>
             <td>{val.inv_email}</td>
             <td>{val.role}</td>
             <td>{val.date}</td>
             <td>{val.time}</td>
             <td>{val.status}</td>
             <td id={val._id}>D</td>
             <td id={val._id}>R</td> 
            </tr>
          ))}
        </tbody>
      </table> 
    </section>
  );
};

export default Table;
