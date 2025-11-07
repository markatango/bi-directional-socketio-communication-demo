import { io } from 'socket.io-client';

//data 

var data = 0;
// Connect to the Socket.IO server
const socket = io(`http://${window.location.hostname}:5000`);


// Get DOM elements
const indicator = document.getElementById('indicator');
const status = document.getElementById('status');
const sendButton = document.getElementById('sendButton');
const connectionStatus = document.getElementById('connectionStatus');

// Handle connection events
socket.on('connect', () => {
    console.log('Connected to server');
    connectionStatus.textContent = 'Connected';
    connectionStatus.className = 'connection-status connected';
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
    connectionStatus.textContent = 'Disconnected';
    connectionStatus.className = 'connection-status disconnected';
});

// Listen for 'indicator' events from server
socket.on('indicator', (value) => {
    console.log('Received indicator:', value);
    
    if (value) {
        indicator.className = 'indicator on';
        status.textContent = 'ON';
    } else {
        indicator.className = 'indicator off';
        status.textContent = 'OFF';
    }
});

// Send 'button' event when button is clicked
sendButton.addEventListener('click', () => {
    console.log('Button clicked, emitting event to server');
    socket.emit('button',data);
    data = (data + 1) % 10;
});
