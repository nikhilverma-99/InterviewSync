import socketIOClient from 'socket.io-client';

const socketLink =  'https://code-collab-server.onrender.com/';
const socket = socketIOClient(socketLink); // Replace with your server URL

export default socket;