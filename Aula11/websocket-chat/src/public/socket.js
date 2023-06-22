// Connect to the WebSocket server
const socket = io();

// Send a message to the server
document.getElementById('message-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('message-input');
    const message = input.value;
    socket.emit('message', message);
    input.value = '';
});

// Receive messages from the server
socket.on('message', (data) => {
    const messages = document.getElementById('messages');
    const message = document.createElement('li');
    message.innerText = message.innerText = data + ' - ' + new Date().toLocaleTimeString();
    messages.appendChild(message);
});