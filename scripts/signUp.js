document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signUpBtn = document.getElementById('signupBtn');

    signUpBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // Fetch existing users
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the user already exists
        if (users.some(user => user.email === email)) {
            alert('User already exists. Please log in.');
            window.location.href = 'login.html';
            return;
        }

        // Add the new user to localStorage
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('Signup successful!');
        window.location.href = 'index.html';
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

let loginredirect = document.querySelector('#loginredirect');
loginredirect.addEventListener('click', (event) => {
event.preventDefault();
    window.location.href = 'logIn.html';
})

// for checkBox

document.querySelector('.showPassword').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});
