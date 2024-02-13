import React from "react";
import "./InterviewPlans.css";

import Logo from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { GiTimeSynchronization } from "react-icons/gi";
import { IoAnalyticsSharp } from "react-icons/io5";

const icons = [
  <BsPeopleFill />,
  <BiSupport />,
  <GiTimeSynchronization />,
  <IoAnalyticsSharp />,
];
const Pricing = () => {
  return (
    <>
      <section style={{ padding: "6.6rem" }} className="section-pricing">
        <div className="container">
          <header
            className="login-left-header"
            style={{ paddingBottom: "8.8rem" }}
          >
            <NavLink to="/">
              <figure className="header-image">
                <img src={Logo} alt="Logo" />
              </figure>
            </NavLink>
          </header>
          <span style={{ fontSize: "2.8rem" }} className="subheading">
            Choose Your Plan
          </span>
          <h2
            style={{ fontSize: "1.8rem", fontWeight: "500" }}
            className="heading-secondary"
          >
            Elevate your hiring game with our straightforward and affordable
            interview solutions.
          </h2>
        </div>

        <div className="pricing-container">
          <div className="pricing-grid grid--3-cols">
            <article className="planPricing">
              <header className="planHeader">
                <p className="planName">BasicTech</p>
                <p className="planPrice">$19</p>
                <p className="planTag">/per month. That's just $4/Interview</p>
              </header>
              <ul className="plan-details">
                <li> {icons[0]}5 Interviews/Month</li>
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
                <p className="planName">ProTech</p>
                <p className="planPrice">$49</p>
                <p className="planTag">
                  /per month. That's just $2.50/Interview
                </p>
              </header>
              <ul className="plan-details  ">
                <li> {icons[0]}20 Interviews/Month</li>
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
                <p className="planName">TechScale</p>
                <p className="planPrice">$99</p>
                <p className="planTag">
                  /per month. That's just $2.0/Interview
                </p>
              </header>
              <ul className="plan-details">
                <li> {icons[0]}50 Interviews/Month</li>
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
    </>
  );
};

export default Pricing;
