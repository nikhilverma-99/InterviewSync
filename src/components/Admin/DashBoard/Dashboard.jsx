import React, { useEffect,useState } from "react";
import './Dashboard.css'
import Overview from "../AdminComponent/Overview"; 
import Graph from './Graph'
import { FaCalendarCheck } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import * as api from '../../../Axios'
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

  const [analyticsData, setAnalyticsData] = useState({})
  const GetAnalyticsData = async()=>{
    const analyticsData = await api.GetAnalyticsData();
    setAnalyticsData(analyticsData.data)
  }
  useEffect(()=>{ 
    GetAnalyticsData();
  },[])
  const datasets = [
    {
      label: ' ',
      data: [analyticsData.pending, analyticsData.selected, analyticsData.declined],
      borderColor:['#002244','#0b6623','#960018'],
      backgroundColor: ['#002244b3', '#0b6623b3', '#960018b3'],
      borderWidth: 4, // Set the border width
      barThickness: 55, // Set the bar width
      borderRadius:7
    },
  ];
  console.log(analyticsData);
  
  return <>
  <section className="stats-grid"> 
  <Overview overviewData={PendingJobs} title='Pending Jobs' stats={analyticsData.pending} ></Overview>
  <Overview overviewData={InterviewScheduled} title='Candidate Selected' stats={analyticsData.selected} ></Overview>
  <div className="decline-job">

  <Overview overviewData={JobsDeclined} title='Jobs Declined'stats={analyticsData.declined} ></Overview>
  </div>
  </section>
  <section className="dashboard-graph" style={{ width: '100%', height: '40rem',minWidth:'50rem' }}>

  <Graph data={datasets}></Graph>
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