import React from 'react'  
import './HowItWorks.css'
import Image1 from '../../images/conductingInterview.webp'
import Image2 from '../../images/interviewSetup .webp'
import Image3 from '../../images/joinigInterview.webp'
import Image4 from '../../images/postInterview .webp'

function HowItWorks() {
  return (
    <section class="section-how">
      <div class="container">
        <span class="subheading">How it works</span>
        <h2 class="heading-secondary">
        Efficient and collaborative workflow from setup to post-interview feedback.
        </h2>
      </div>

      <div class="container grid grid--2-cols grid--center-v" style={{paddingTop:'10rem'}}> 
        <div class="step-text-box">
          <p class="step-number">01</p>
          <h3 class="heading-tertiary">
            Interview Setup
          </h3>
          <p class="step-description">
           InterviewSync simplifies initiation. Companies register, schedule interviews, and provide details. Interviewers get unique tokens via email for a secure and personalized setup.
          </p>
        </div>
        <div class="step-img-box"> 
          <img   
            src={Image2}
            className="step-img"
            alt="How it works Image 2"
            loading="lazy" 
          />
        </div> 
        <div class="step-img-box">
        <img   
            src={Image3}
            className="step-img"
            alt="How it works image 3"
            loading="lazy" 
          />
        </div>
        <div class="step-text-box">
          <p class="step-number">02</p>
          <h3 class="heading-tertiary">Joining the Interview</h3>
          <p class="step-description">
          Interviewers enter with credentials, select questions. Interviewees use tokens to enter a waiting room, ready for the split-screen live coding or whiteboard session.
          </p>
        </div> 
        <div class="step-text-box">
          <p class="step-number">03</p>
          <h3 class="heading-tertiary">Conducting the Interview:</h3>
          <p class="step-description">
          Real-time video and audio chat facilitate communication. A timer ensures structure. Collaborative coding is supported, enhancing the assessment process.
          </p>
        </div>
        <div class="step-img-box">
        <img   
            src={Image1}
            className="step-img"
            alt="How it works Image 1"
            loading="lazy" 
          />
        </div>
        <div class="step-img-box">
        <img   
            src={Image4}
            className="step-img"
            alt="How ot works image 4"
            loading="lazy" 
          />
        </div>
        <div class="step-text-box">
          <p class="step-number">04</p>
          <h3 class="heading-tertiary">Post-Interview</h3>
          <p class="step-description">
          Interviewers submit feedback through a post-interview form. An interview history section details past interviews and recordings for analysis. Users manage profiles for future interviews.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks