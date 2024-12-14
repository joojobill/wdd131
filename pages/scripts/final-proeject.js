// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'); // Hamburger button
    const navLinks = document.querySelector('.nav-links'); // Navigation links

    // Toggle visibility of navigation and hamburger animation
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Show or hide nav links
        hamburger.classList.toggle('active'); // Animate hamburger menu
    });

    // Close menu when clicking on a link (optional)
    navLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('show'); // Hide nav links
            hamburger.classList.remove('active'); // Reset hamburger menu
        }
    });
});
// Ensure DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Form validation and submission
    const contactForm = document.querySelector('.contact-form');
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const messageField = document.querySelector('#message');

    // Add event listener for form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
        
        // Validate input fields
        const isValid = validateForm();
        if (isValid) {
            // Save data to localStorage
            saveFormData();

            // Show success message
            displayAlert('Thank you for your message! We will get back to you soon.', 'success');

            // Reset the form
            contactForm.reset();
        } else {
            displayAlert('Please fill in all fields correctly.', 'error');
        }
    });

    // Validate form function
    function validateForm() {
        let isValid = true;

        // Name validation
        if (nameField.value.trim() === '') {
            isValid = false;
            nameField.style.borderColor = 'red';
        } else {
            nameField.style.borderColor = '';
        }

        // Email validation
        if (!validateEmail(emailField.value)) {
            isValid = false;
            emailField.style.borderColor = 'red';
        } else {
            emailField.style.borderColor = '';
        }

        // Message validation
        if (messageField.value.trim() === '') {
            isValid = false;
            messageField.style.borderColor = 'red';
        } else {
            messageField.style.borderColor = '';
        }

        return isValid;
    }

    // Validate email function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Save form data to localStorage
    function saveFormData() {
        const formData = {
            name: nameField.value.trim(),
            email: emailField.value.trim(),
            message: messageField.value.trim(),
        };

        localStorage.setItem('contactFormData', JSON.stringify(formData));
    }

    // Display success or error message
    function displayAlert(message, type) {
        // Remove any existing alerts
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        // Create alert element
        const alert = document.createElement('div');
        alert.className = `alert ${type}`;
        alert.textContent = message;

        // Add alert to the DOM
        contactForm.insertAdjacentElement('beforebegin', alert);

        // Remove alert after 5 seconds
        setTimeout(() => alert.remove(), 5000);
    }
});
