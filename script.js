document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    function validateName() {
        if (nameField.value.trim() === '') {
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    }
    function validateEmail() {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(emailField.value.trim())) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    }
    function validatePassword() {
        if (passwordField.value.length < 8) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    }
    nameField.addEventListener('input', validateName);
    emailField.addEventListener('input', validateEmail);
    passwordField.addEventListener('input', validatePassword);
    form.addEventListener('submit', function(event) {
        validateName();
        validateEmail();
        validatePassword();

        if (nameError.style.display === 'block' || emailError.style.display === 'block' || passwordError.style.display === 'block') {
            event.preventDefault(); 
        }
    });
});
