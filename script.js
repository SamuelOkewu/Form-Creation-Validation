document.addEventListener('DOMContentLoaded', () => {
    // Form Selection
    const form = document.getElementById('registration-form');
    // Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');

     [function]}
    // Form Submission Event Listener
    form.addEventListener('submit', (event) => {
        // Prevent form from submitting to the server
        event.preventDefault();

        // --- Input Retrieval and Trimming ---
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // --- Validation Logic ---
        // Initialize Validation Variables
        let isValid = true;
        let messages = [];

        // Username Validation: Check if length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation: Check if email includes both ‘@’ and ‘.’
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address (must contain "@" and ".").');
        }

        // Password Validation: Ensure length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // --- Displaying Feedback ---
        // Make feedbackDiv visible
        feedbackDiv.style.display = 'block';

        if (isValid) {
            // Success message
            feedbackDiv.textContent = 'Registration successful! 🎉';
            feedbackDiv.style.color = '#28a745'; // Green text
            feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background
            // Optionally, clear the form here: form.reset();
        } else {
            // Error messages
            // Join messages with <br> to form a single string
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545'; // Red text
            feedbackDiv.style.backgroundColor = '#ffbaba'; // Light red background
        }
    });
});