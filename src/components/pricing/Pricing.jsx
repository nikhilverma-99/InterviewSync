import React from "react";
import './Pricing.css';

import { BsPeopleFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { GiTimeSynchronization } from "react-icons/gi";
import { IoAnalyticsSharp } from "react-icons/io5";

const icons = [<BsPeopleFill/>,<BiSupport/>,<GiTimeSynchronization/>,<IoAnalyticsSharp/>]
const Pricing = () => {
  return (
    <section className="section-pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Elevate Your Synced Interviews with Cost Effective Solutions.
        </h2>

      </div>

      <div className="pricing-container">
      <div className="pricing-grid grid--3-cols"> 
        
        <article className="planPricing">
          <header className="planHeader">
            <p className="planName">Starter</p>
            <p className="planPrice">$19</p>
            <p className="planTag">/per month. That's just $4/Interview</p>
          </header>
          <ul className="plan-details">
            <li>  {icons[0]}5 Interviews/Month</li>
            <li> {icons[1]}Priority Support</li>
            <li>{icons[2]}Code Synchronization</li>
            <li>{icons[3]}Analytics</li>
          </ul>
        <div className="getStarted-btn">
          <div className="buyBtn">
            <span> Get Started</span>
          </div>
        
          </div>
        </article>

        <article className="planPricing mostPopular">
          <header className="planHeader">
            <p className="planName">Standard</p>
            <p className="planPrice">$49</p>
            <p className="planTag">/per month. That's just $2.50/Interview</p>
          </header>
          <ul className="plan-details  ">
            <li>  {icons[0]}20 Interviews/Month</li>
            <li> {icons[1]}Priority Support</li>
            <li>{icons[2]}Code Synchronization</li>
            <li>{icons[3]}Analytics</li>
          </ul>
        <div className="getStarted-btn btn-mostPopular">
          <div className="buyBtn">
            <span> Get Started</span>
          </div>
        
          </div>
        </article>

        <article className="planPricing premium">
          <header className="planHeader">
            <p className="planName">Premium</p>
            <p className="planPrice">$99</p>
            <p className="planTag">/per month. That's just $2.0/Interview</p>
          </header>
          <ul className="plan-details">
            <li>  {icons[0]}50 Interviews/Month</li>
            <li> {icons[1]}Priority Support</li>
            <li>{icons[2]}Code Synchronization</li>
            <li>{icons[3]}Analytics</li>
          </ul>
        <div className="getStarted-btn">
          <div className="buyBtn">
            <span> Get Started</span>
          </div>
        
          </div>
        </article>

      </div>

      </div>

      
    </section>
  );
};

export default Pricing;
