document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('fromDetails');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const continueBtn = document.getElementById('continueBtn');

    continueBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate email and password
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        // Check if the user exists in localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email);

        if (user) {
            // If user exists, check the password
            if (user.password === password) {
                alert('Login successful!');
                // Save user session in localStorage
                localStorage.setItem('loggedInUser', JSON.stringify({ email }));
                // Redirect to the home page
                window.location.href = 'index.html';
            } else {
                alert('Incorrect password. Please try again.');
            }
        } else {
            // Redirect to signup page if user doesn't exist
            alert('User not found. Redirecting to signup...');
            window.location.href = 'signUp.html';
        }
    });

    // Validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// for checkBox

document.querySelector('.showPassword').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});
