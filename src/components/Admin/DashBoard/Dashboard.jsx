import React from "react";
import './Dashboard.css'
import Overview from "../AdminComponent/Overview"; 
import Graph from './Graph'
import { FaCalendarCheck } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
const PendingJobs={
  icons: <MdPendingActions className="stats-icon" />,
  statsBackground:'#bee0ec',
  color:'#002244',
  iconBackground:'#a8d5e5'
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
  return <>
  <section className="stats-grid"> 
  <Overview overviewData={PendingJobs} title='Pending Jobs' stats='27' ></Overview>
  <Overview overviewData={InterviewScheduled} title='Interview Scheduled' stats='14'></Overview>
  <Overview overviewData={JobsDeclined} title='Jobs Declined' stats='25'></Overview>
  </section>
  <section className="dashboard-graph" style={{ width: '100%', height: '40rem' }}>

  <Graph></Graph>
  </section>
  </>
};

export default Dashboard;


// const PendingJobs={
//   icons: <MdPendingActions className="stats-icon" />,
//   statsBackground:'#bee0ec',
//   color:'#071e26',
//   iconBackground:'#a8d5e5'
// }