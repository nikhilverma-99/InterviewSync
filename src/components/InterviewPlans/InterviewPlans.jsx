import React, { useState, useEffect } from "react";
import "./InterviewPlans.css";

import Logo from "../../images/Logo.svg";
import { NavLink } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { GiTimeSynchronization } from "react-icons/gi";
import { IoAnalyticsSharp } from "react-icons/io5";
import { success, error } from "../utils/toast";
import * as api from "../../Axios";

const Pricing = () => {
  const icons = [
    <BsPeopleFill />,
    <BiSupport />,
    <GiTimeSynchronization />,
    <IoAnalyticsSharp />,
  ];
  const [plans, setPlans] = useState([{}]);
  const [loading, setLoading] = useState(false);

  const handlePricingButton = async (e) => {
    try {
      setLoading(true);
      const documentID = e.target.id;
      console.log(e.target);

      const keyResponse = await api.getKey();
      const pricing = await api.checkoutPlanWithId(documentID);
      console.log(pricing);
      const { planType, price } = pricing?.data?.cPlan;
      const { amount, id } = pricing.data;
      const key = keyResponse?.data?.key;
      console.log(key);
      console.log(keyResponse);

      //CALLBACK_URL
      let CALLBACK_URL =
        "https://interviewsync.in/api/v1/payment/paymentverification";

        let options = {
          "key": key, // Enter the Key ID generated from the Dashboard
          "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          "currency": "INR",
          "name": "InterviewSync Payment",
          "description": "Test Transaction",
          "image": "https://interviewsync.in/assets/Logo-RdZz1ygO.svg",
          "order_id": id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          "callback_url": CALLBACK_URL,
          "prefill": {
              "name": "Gaurav Kumar",
              "email": "gaurav.kumar@example.com",
              "contact": "9000090000"
          },
          "notes": {
              "address": "Razorpay Corporate Office"
          },
          "theme": {
              "color": "#3399cc"
          }
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    const getPlans = async () => {
      let res = await api.getAllPlans();
      console.log(res.data);
      setPlans(res.data);
    };
    getPlans();
  }, []);
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
                <p className="planName">{plans[0]?.planName}</p>
                <p className="planPrice">${plans[0]?.planPrice}</p>
                <p className="planTag"> {plans[0]?.planTag}</p>
              </header>
              <ul className="plan-details">
                <li>
                  {" "}
                  {icons[0]}
                  {plans[0]?.noOfInterviews} Interviews/Month
                </li>
                <li> {icons[1]}Priority Support</li>
                <li>{icons[2]}Code Synchronization</li>
                <li>{icons[3]}Analytics</li>
              </ul>
              <div
                className="getStarted-btn"
                id={plans[0]?._id}
                onClick={handlePricingButton}
              >
                <div className="buyBtn">
                  <span> Get Started</span>
                </div>
              </div>
            </article>

            <article className="planPricing mostPopular">
              <header className="planHeader">
                <p className="planName">{plans[1]?.planName}</p>
                <p className="planPrice">${plans[1]?.planPrice}</p>
                <p className="planTag"> {plans[1]?.planTag}</p>
              </header>
              <ul className="plan-details  ">
                <li> {icons[0]}20 Interviews/Month</li>
                <li> {icons[1]}Priority Support</li>
                <li>{icons[2]}Code Synchronization</li>
                <li>{icons[3]}Analytics</li>
              </ul>
              <div
                className="getStarted-btn btn-mostPopular"
                id={plans[1]?._id}
                onClick={handlePricingButton}
              >
                <div className="buyBtn">
                  <span> Get Started</span>
                </div>
              </div>
            </article>

            <article className="planPricing premium">
              <header className="planHeader">
                <p className="planName">{plans[2]?.planName}</p>
                <p className="planPrice">${plans[2]?.planPrice}</p>
                <p className="planTag"> {plans[2]?.planTag}</p>
              </header>
              <ul className="plan-details">
                <li> {icons[0]}50 Interviews/Month</li>
                <li> {icons[1]}Priority Support</li>
                <li>{icons[2]}Code Synchronization</li>
                <li>{icons[3]}Analytics</li>
              </ul>
              <div
                className="getStarted-btn"
                id={plans[2]?._id}
                onClick={handlePricingButton}
              >
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
