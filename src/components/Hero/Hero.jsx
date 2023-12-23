import React from 'react';
import './Hero.css'
import customerImages from './customerImages';
import HeroImage from '../../images/hero.png'
const Hero = () => {
  return (
     <section className="section-hero">
        <div className="hero">
            <div className="hero-img-box">
              <img className="hero-img" src={HeroImage}/>
            </div> 
            <div className="hero-text-box">
                <h1 className="heading-primary">
                Code Together, Anywhere, Anytime 
                </h1>
                <p className="hero-description">
                CodeCollab is your go-to platform for collaborative code editing. Whether you're working on a project with a team or getting help from a friend, CodeCollab makes coding together seamless and efficient.
                </p> 
                <div className='hero-links'>
                  <a href="#" className='btn btn-startCoding'>Start Coding !</a>
                  <div className='middle'> </div>
                  <a href="#" className='btn btn-Learnmore'>Learn More</a>
                </div>
             

                <div className="delivered-meals">
                <div className="delivered-imgs">
                {Object.values(customerImages).map((value, index) => {
                    console.log(value);

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
