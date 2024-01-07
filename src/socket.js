import socketIOClient from 'socket.io-client';

const socketLink = process.env.COLLAB_BACKEND_LINK | 'https://code-collab-server.onrender.com/';
const socket = socketIOClient(socketLink); // Replace with your server URL

export default socket;