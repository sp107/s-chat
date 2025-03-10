// chat.js
const socket = io();

const username = sessionStorage.getItem('username');
if (!username) {
    window.location.href = 'index.html'; // Redirect to login if no username found
}

document.getElementById('username-display').textContent = username;

function sendMessage() {
    const message = document.getElementById('messageInput').value;
    
    if (message.trim() !== '') {
        const data = {
            username,
            message
        };

        socket.emit('sendMessage', data); // Emit the message to the server

        document.getElementById('messageInput').value = ''; // Clear input field
    }
}

socket.on('message', data => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${data.username}</strong>: ${data.message}`;
    document.getElementById('messages').appendChild(messageElement);
});

function logout() {
    sessionStorage.removeItem('username'); // Clear the session storage
    window.location.href = 'index.html'; // Redirect to login
}
