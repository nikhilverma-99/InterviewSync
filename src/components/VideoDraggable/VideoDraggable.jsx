import React from "react";
import Draggable from 'react-draggable';
import './VideoDraggable.css';

const VideoDraggable = () => {
  return (
    <Draggable>
      <div id="draggable" className="no-select column gap-7px"> 
          <div className='video-container column'>
              <div className="video">
                  <img width="100%" height="100%" src="https://womenwhomoney.com/wp-content/uploads/2021/02/young-woman-interviewing-virtually-for-a-job-650x325.jpg" alt="Interviewer"/>
              </div>
              <div className="video-container-title">
                  <span>Interviewer</span>
              </div>
          </div>
          <div className='video-divider'></div> 
          <div className='video-container column'>
              <div className="video">
                <img width="100%" height="100%" src="https://womenwhomoney.com/wp-content/uploads/2021/02/young-woman-interviewing-virtually-for-a-job-650x325.jpg" alt="Candidate"/>
              </div>
              <div className="video-container-title">
                  <span>Candidate</span>
              </div>
          </div>
      </div>
    </Draggable>
  );
};

export default VideoDraggable;
