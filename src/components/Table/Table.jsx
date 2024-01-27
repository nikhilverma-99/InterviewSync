
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
   
  
  // Sorting logic
  const sortedData = interviewData.slice().sort((a, b) => {
    const compareValue = a[sortKey].localeCompare(b[sortKey]);
    return sortOrder === "asc" ? compareValue : -compareValue;
  });

  // Filtering logic based on search query
  const filteredData = sortedData.filter((item) =>
    item["Candidate Name"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSort = (key) => {
    if (key === sortKey) {
      // Toggle sortOrder if clicking on the same key
      setSortOrder((order) => (order === "asc" ? "desc" : "asc"));
    } else {
      // Set new sort key and default to ascending order
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  useEffect(async()=>{
    const tableData = await api.getAllInterview() ;
    console.log(tableData);
    
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
            <th style={{ width: "50px" }}>S.No</th>
            <th style={{ width: "150px" }} onClick={() => handleSort("Job Role")}>
              Job Role {sortKey === "Job Role" && (sortOrder === "asc" ? '\u2191' : '\u2193')}
            </th>
            <th style={{ width: "150px" }} onClick={() => handleSort("Candidate Name")}>
              Candidate Name 
              <span>
              {sortKey === "Candidate Name" && (sortOrder === "asc" ?'\u2191' : '\u2193')}

              </span>
              
            </th>
            <th style={{ width: "100px" }} onClick={() => handleSort("Candidate Exp.")}>
              Candidate Exp .
              <span>
                {sortKey === "Candidate Exp." && (sortOrder === "asc" ? '\u2191' : '\u2193')}
                </span>
            </th>
            <th style={{ width: "200px" }}>Candidate Resume</th>
            <th style={{ width: "200px" }} onClick={() => handleSort("Interview Timing")}>
              Interview Timing 
              <span>
                {sortKey === "Interview Timing" && (sortOrder === "asc" ? '\u2191' : '\u2193')}
                </span>
            </th>
            <th style={{ width: "200px" }}>Technical Skills</th>
          </tr>
        </thead>

        <tbody>
          {currentItems.map((val, index) => (
            <tr key={index}>
              <td>{index + 1 + indexOfFirstItem}</td>
              {Object.keys(val).map((key) => (
                <td key={key}>{val[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Table;
