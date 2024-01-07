import React from "react";
import "./Table.css"
 
const interviewData = [
    {
        "Job Role": "Software Engineer",
        "Candidate Name": "John Doe",
        "Candidate Exp.": "5 years",
        "Candidate Resume": "link_to_resume.pdf",
        "Interview Timing": "2024-01-06 10:00 AM",
        "Technical Skills": `["JavaScript", "React", "Node.js"]`
    },
    {
        "Job Role": "Data Scientist",
        "Candidate Name": "Jane Smith",
        "Candidate Exp.": "3 years",
        "Candidate Resume": "link_to_resume.pdf",
        "Interview Timing": "2024-01-07 2:30 PM",
        "Technical Skills": `["Python", "Machine Learning", "Data Analysis"]`
    },
    // Add more dummy data as needed
];
console.log(Object.keys(interviewData[0]))
const Table = () => {
  return <section>
            <table class="content-table">
            <thead>
                <tr>
                    <th>S.No</th>
                    {Object.keys(interviewData[0]).map((val) => (
                        <th key={val}>{val}</th>
                    ))}
                </tr>
            </thead>

                <tbody>
                    {interviewData.map((val, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            {Object.keys(val).map((key) => (
                                <td key={key}>{val[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table> 
         </section>;
};

export default Table;
