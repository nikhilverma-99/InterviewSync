import { useEffect, useState ,useRef,useCallback} from "react" 
import Peer from "peerjs"
import Draggable from 'react-draggable';
import socket from "../../socket"

import '../VideoDraggable/VideoDraggable.css'
const VideoCall = () => {
  const [peerId, setPeerId] = useState('');
  const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);

  const call = useCallback((remotePeerId) => {
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {
      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play();

      const call = peerInstance.current.call(remotePeerId, mediaStream);

      call.on('stream', (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;
        remoteVideoRef.current.play();
      });
    });
  }, []);

  useEffect(() => {
    const peer = new Peer();
    peer.on('open', (id) => {
      setPeerId(id);
      socket.emit('user-joined', { userID: id });
    });

    peer.on('call', (call) => {
      var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();

        // Answer the incoming call and attach the local stream
        call.answer(mediaStream);

        call.on('stream', function(remoteStream) {
          // Display the remote stream in the remote video element
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      });
    });

    peerInstance.current = peer;

    socket.on("video-status", ({ userId, videoEnabled }) => {
      if (userId !== peerId) {
        console.log(userId);
        if (videoEnabled) {
          call(userId);
        } else {
        }
      }
    });

    return () => {
      peer.disconnect();
      socket.disconnect();
    };
  }, [socket]);

  return (
    <>
      <div className="App">
        <h1>Current user id is {peerId}</h1>
        <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />
        {/* Removed the call button from here, you can implement it based on your use case */}
      </div>
      <Draggable>
        <section id="interviewSection" className="interview-section no-select">
          <div id="draggable" className="column gap-7px">
            <div className='video-container column'>
              <div className="video">
                <video width="100%" height="100%" ref={currentUserVideoRef}></video>
              </div>
              <label className="video-container-title">
                <span>Interviewer</span>
              </label>
            </div>
            <div className='video-divider'></div>
            <div className='video-container column'>
              <div className="video">
                <video width="100%" height="100%" ref={remoteVideoRef}></video>
              </div>
              <label className="video-container-title">
                <span>Candidate</span>
              </label>
            </div>
          </div>
        </section>
      </Draggable>
    </>
  );
}

export default VideoCall