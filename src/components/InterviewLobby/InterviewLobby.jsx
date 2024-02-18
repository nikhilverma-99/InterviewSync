import React,{useState, useEffect} from "react";
import './InterviewLobby.css'
 
import LobbyData from './lobbyData'
import Logo from '../../images/Logo.svg'
import LoadingIcons from "react-loading-icons";

const InterviewLobby = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the index to switch to the next image
      setIndex((prevIndex) => (prevIndex + 1) % LobbyData.length);
    }, 4500); // 2000 milliseconds = 2 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return <main style={{height:'100vh'}}>
    <header className='lobby-header'> 
      <figure>
        <img src= {Logo} alt="logo" style={{ height: '5.1rem' }} />
      </figure>  
     </header>
     <div className="interviewLobby-content">
      <div className="interviewLobby-mainContent"> 
        <div className="interviewLobby-quote">
          <div className="quote-data">
            <blockquote className="quote">{LobbyData[index].quote}</blockquote>
            <p className="quote-author">&mdash; {LobbyData[index].author}</p>
          </div>
        </div>
        <div className="image-transition-container" >  
          {LobbyData.map((val, i) => (
            <img
              key={i}
              src={val.img}
              alt={`Image ${i + 1}`}
              className={`image-transition ${i === index ? 'visible' : 'hidden'}`}
            />
          ))}
          
        </div>
      </div>
      <div className="lobby-loading">
        <LoadingIcons.Grid  fill='#B6BBC4' speed={1} style={{ transform: 'scale(0.6)'}} />
      </div>
     </div>
  </main>;
};

export default InterviewLobby;

