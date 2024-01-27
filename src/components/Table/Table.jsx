
import React, { useEffect, useState } from "react";
import "./Table.css";
import * as api from '../../Axios'

const interviewData = [
  {
    "Job Role": "Software Engineer",
    "Candidate Name": "Alice Johnson",
    "Candidate Exp.": "6 years",
    "Candidate Resume": "link_to_resume.pdf",
    "Interview Timing": "2024-02-10 / 11:15 AM",
    "Technical Skills": `["Java", "Spring Boot", "Angular"]`,
  },
  {
    "Job Role": "Data Scientist",
    "Candidate Name": "Bob Williams",
    "Candidate Exp.": "4 years",
    "Candidate Resume": "link_to_resume.pdf",
    "Interview Timing": "2024-02-12 3:45 PM",
    "Technical Skills": `["R", "Statistical Analysis", "Big Data"]`,
  },
  {
    "Job Role": "Front-end Developer",
    "Candidate Name": "Eva Davis",
    "Candidate Exp.": "3 years",
    "Candidate Resume": "link_to_resume.pdf",
    "Interview Timing": "2024-02-15 / 2:00 PM",
    "Technical Skills": `["HTML", "CSS", "Vue.js"]`,
  },
  {
    "Job Role": "DevOps Engineer",
    "Candidate Name": "Michael Brown",
    "Candidate Exp.": "5 years",
    "Candidate Resume": "link_to_resume.pdf",
    "Interview Timing": "2024-02-18 / 10:30 AM",
    "Technical Skills": `["Docker", "Kubernetes", "Jenkins"]`,
  },
  {
    "Job Role": "UX Designer",
    "Candidate Name": "Olivia Martinez",
    "Candidate Exp.": "4 years",
    "Candidate Resume": "link_to_resume.pdf",
    "Interview Timing": "2024-02-20 / 1:45 PM",
    "Technical Skills": `["Adobe XD", "Sketch", "User Research"]`,
  },
  {
    "Job Role": "Backend Developer",
    "Candidate Name": "Charlie Taylor",
    "Candidate Exp.": "6 years",
    "Candidate Resume": "link_to_resume.pdf",
    "Interview Timing": "2024-02-22 / 11:00 AM",
    "Technical Skills": `["Python", "Django", "REST API"]`,
  },
  {
    "Job Role": "Network Engineer",
    "Candidate Name": "Sophie Clark",
    "Candidate Exp.": "3 years",
    "Candidate Resume": "link_to_resume.pdf",
    "Interview Timing": "2024-02-25 / 3:15 PM",
    "Technical Skills": `["Cisco", "Firewall Configuration", "Routing"]`,
  },
  {
    "Job Role": "Mobile App Developer",
    "Candidate Name": "Daniel Garcia",
    "Candidate Exp.": "4 years",
    "Candidate Resume": "link_to_resume.pdf",
    "Interview Timing": "2024-02-28 / 2:30 PM",
    "Technical Skills": `["Swift", "Kotlin", "React Native"]`,
  },
  {
    "Job Role": "QA Engineer",
    "Candidate Name": "Mia Anderson",
    "Candidate Exp.": "3 years",
    "Candidate Resume": "link_to_resume.pdf",
    "Interview Timing": "2024-03-02 / 10:45 AM",
    "Technical Skills": `["Selenium", "JUnit", "Test Automation"]`,
  },
  {
    "Job Role": "Cloud Architect",
    "Candidate Name": "Liam Wilson",
    "Candidate Exp.": "5 years",
    "Candidate Resume": "link_to_resume.pdf",
    "Interview Timing": "2024-03-05 / 1:00 PM",
    "Technical Skills": `["AWS", "Azure", "Google Cloud"]`,
  },
  // Add more dummy data as needed
];


const Table = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState("Candidate Name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
   const [tableData,setTableData] = useState([]) ;
  

 
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  useEffect(async()=>{
    const getTable = await api.getAllInterview() ;
    console.log(getTable);

    setTableData(getTable.data)
    
  },[])
  return (
    <section className="table-container">
      <div className="search-container">
        <label htmlFor="search">Search Candidate Name: </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleSearch}
          className="form-input"
          placeholder="Enter candidate name..."
        />
      </div>

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
          </tr>
        </thead>

        <tbody>
          {getTable.map((val, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{val.can_email}</td>
              <td>{val.inv_email}</td>
              <td>{val.role}</td>
              <td>{val.date}</td>
              <td>{val.time}</td>
              <td>{val.status}</td>
            </tr>
          ))}
        </tbody> 
      </table> 
  
    </section>
  );
};

export default Table;
