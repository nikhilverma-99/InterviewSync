import React from "react";
import './Dashboard.css'
import Overview from "../AdminComponent/Overview";

const PendingJobs={}
const Dashboard = () => {
  return <section className="stats-grid"> 
  <Overview></Overview>
  <Overview></Overview>
  <Overview></Overview>
  </section>;
};

export default Dashboard;
