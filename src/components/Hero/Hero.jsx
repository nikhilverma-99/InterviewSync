import React from 'react';
import './Hero.css'
import customerImages from './customerImages';
import HeroImage from '../../images/hero.png'
import { NavLink } from 'react-router-dom';
const Hero = () => {
  return (
     <section className="section-hero">
        <div className="hero">
            <div className="hero-img-box">
              <img className="hero-img" alt="hero-img" src={HeroImage}/>
            </div> 
            <div className="hero-text-box">
                <h1 className="heading-primary">
                Elevating Interviews with Seamless Collaboration
                </h1>
                <p className="hero-description">
                Elevate your interview experience with InterviewSync, the ultimate platform meticulously crafted for unparalleled efficiency and seamless collaboration – from setup to insightful post-interview feedback.
                </p> 
                <div className='hero-links'>
                  <NavLink  to= '/enterInterview' className='btn btn-startCoding'>Start Coding !</NavLink> 
                  <NavLink to='/dashboard' className='btn btn-Learnmore'>Learn More</NavLink>
                </div>
             

                <div className="delivered-meals">
                  <div className="delivered-imgs">
                  {Object.values(customerImages).map((value, index) => { 
                  return ( 
                    <> 
                    <img
                      src={value}
                      className="customer_image"
                      alt="customer"
                      loading="lazy" 
                    />
                    </> 
                  );
                })}
                  </div>
                  <p className="delivered-text"> 
                    Join <span>1M + </span>active users collaborating now!
                  </p>
                  </div>
            </div>
           
        </div>
     </section>
  )
}

export default Hero
