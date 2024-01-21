import socketIOClient from 'socket.io-client';

const socketLink = `/api/v1`;
const socket = socketIOClient(socketLink); // Replace with your server URL

export default socket;