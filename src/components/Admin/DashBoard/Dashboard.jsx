import React from "react";
import './Dashboard.css'
import Overview from "../AdminComponent/Overview"; 

import { FaCalendarCheck } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
const PendingJobs={
  icons: <MdPendingActions className="stats-icon" />,
  statsBackground:'#fff4e6',
  color:'#ff8c00',
  iconBackground:'#ffe8cc'
}
const InterviewScheduled={icons:<FaCalendarCheck className="stats-icon"/>,
statsBackground:'#e7f0e9',
color:'#0b6623',
iconBackground:'#cee0d3'}

const JobsDeclined = {icons:<FaBug className="stats-icon"/>,
statsBackground:'#f5e6e8',
color:'#960018',
iconBackground:'#eaccd1'}

const Dashboard = () => {
  return <section className="stats-grid"> 
  <Overview overviewData={PendingJobs} title='Pending Jobs' stats='27' ></Overview>
  <Overview overviewData={InterviewScheduled} title='Interview Scheduled' stats='14'></Overview>
  <Overview overviewData={JobsDeclined} title='Jobs Declined' stats='25'></Overview>
  </section>;
};

export default Dashboard;


// const PendingJobs={
//   icons: <MdPendingActions className="stats-icon" />,
//   statsBackground:'#bee0ec',
//   color:'#071e26',
//   iconBackground:'#a8d5e5'
// }