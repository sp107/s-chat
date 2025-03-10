// login.js
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            sessionStorage.setItem('username', username); // Store username in sessionStorage
            window.location.href = 'chat.html';
        } else {
            alert('Invalid username or password');
        }
    })
    .catch(err => console.log(err));
});
