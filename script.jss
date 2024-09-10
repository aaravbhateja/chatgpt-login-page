document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    loginBtn.addEventListener('click', function() {
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    });

    signupBtn.addEventListener('click', function() {
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Basic client-side validation
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        if (username && password) {
            // Redirect to YouTube
            window.location.href = 'https://www.instagram.com/who.aar4v/';
        } else {
            alert('Please fill in all fields.');
        }
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Basic client-side validation
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        if (username && email && password) {
            // Redirect to YouTube
            window.location.href = 'https://www.youtube.com';
        } else {
            alert('Please fill in all fields.');
        }
    });
});
