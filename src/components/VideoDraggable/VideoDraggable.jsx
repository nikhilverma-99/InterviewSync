import React, { useEffect, useState ,useRef} from "react";
import Peer from "peerjs" 
import Draggable from 'react-draggable';
import './VideoDraggable.css';
import { BsWebcam } from "react-icons/bs";
const VideoDraggable = (props) => {
  console.log(props.color)
  const styling =props.color;


  const [peerId, setPeerId] = useState('');
  const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);

  useEffect(() => {
    const peer = new Peer();

    peer.on('open', (id) => {
      setPeerId(id)
    });

    peer.on('call', (call) => {
      var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        call.answer(mediaStream)
        call.on('stream', function(remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream
          remoteVideoRef.current.play();
        });
      });
    })

    peerInstance.current = peer;
  }, [])

  const call = (remotePeerId) => {
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {

      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play();

      const call = peerInstance.current.call(remotePeerId, mediaStream)

      call.on('stream', (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream
        remoteVideoRef.current.play();
      });
    });
  }

  return (
    <>
        <h1>Current user id is {peerId}</h1>
      <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />  
        <Draggable>
        <div id="draggable" className="no-select column gap-7px" style={{backgroundColor:styling.backgroundColor, border: `2px solid ${styling.title}`,}}> 
            <div className='video-container column' >
                <div className="video">
                <video ref={currentUserVideoRef} width="100%" height="100%"/>
                </div>
                <label className="video-container-title" style={{backgroundColor:styling.title}} >
                    <span style={{color:styling.fontColor}}>Interviewer</span>
                </label>
            </div>
            <div className='video-divider' style={{backgroundColor:styling.title}}></div> 
            <div className='video-container column' >
                <div className="video">
                <video width="100%" height="100%"  ref={remoteVideoRef} /> 
                    
                </div>
                <label className="video-container-title" style={{backgroundColor:styling.title}} >
                    <span style={{color:styling.fontColor}}>Candidate</span>
                </label>
            </div> 
            <div className="call-btn" onClick={() => call(remotePeerIdValue)}>
              <BsWebcam style={{fontSize:'2.8rem'}}/>
                <span> Connect Camera </span>
            </div>
        </div>
        </Draggable>
    </>
  );
};

export default VideoDraggable;
