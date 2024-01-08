import socketIOClient from 'socket.io-client';

const socketLink =  'https://codecollab-k6wq.onrender.com/';
const socket = socketIOClient(socketLink); // Replace with your server URL

export default socket;