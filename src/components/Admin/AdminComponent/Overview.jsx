import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import './Overview.css'
const Overview = (props) => {
  return <article className="dashboard-overview" > 
  <div className="stats-row">
    <span>27</span>
    <IoNewspaperOutline className="stats-icon"/>
  </div>
  <span className="stats-title">Pending Application</span>
  </article>;
};

export default Overview;

//statsBackground
//color border
//icon background
{/* <article className="dashboard-overview" style={{backgroundColor:props.statsBackground,color:color,borderBottom:`6px solid {color}`}}> 
  <div className="stats-row">
    <span>27</span>
    <IoNewspaperOutline className="stats-icon" style={{backgroundColor:props.iconBackground}}/>
  </div>
  <span className="stats-title">Pending Application</span>
  </article>; */}