import { useEffect, useState ,useRef} from "react" 
import Peer from "peerjs"
import Draggable from 'react-draggable';

const VideoCall = () => {
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

      return ()=>{
        peer.disconnect()
      }
    }, [])
  
    const call = (remotePeerId) => {
      var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  
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
  
    return (<>
      <div className="App">
        <h1>Current user id is {peerId}</h1>
        <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />
        <button onClick={() => call(remotePeerIdValue)}>Call</button>
          
      </div>
      <Draggable>
      <div id="draggable" className="no-select column gap-7px"> 
          <div className='video-container column'>
              <div className="video">
          <video width="100%" height="100%" ref={currentUserVideoRef} />
                  {/* <img width="100%" height="100%" src="https://womenwhomoney.com/wp-content/uploads/2021/02/young-woman-interviewing-virtually-for-a-job-650x325.jpg" alt="Interviewer"/> */}
              </div>
              <div className="video-container-title">
                  <span>Interviewer</span>
              </div>
          </div>
          <div className='video-divider'></div> 
          <div className='video-container column'>
              <div className="video">
                {/* <img width="100%" height="100%" src="https://womenwhomoney.com/wp-content/uploads/2021/02/young-woman-interviewing-virtually-for-a-job-650x325.jpg" alt="Candidate"/> */}
                <video width="100%" height="100%" ref={remoteVideoRef} />

              </div>
              <div className="video-container-title">
                  <span>Candidate</span>
              </div>
          </div>
      </div>
    </Draggable>
    </>
    );
}

export default VideoCall