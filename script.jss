document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const messageElement = document.getElementById('message');

    // Simple client-side validation (in real scenarios, you need server-side validation)
    if (username === 'admin' && password === 'password') {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Invalid credentials';
        messageElement.style.color = 'red';
    }
});
