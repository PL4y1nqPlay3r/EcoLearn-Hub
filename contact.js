document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submissionMessage = document.getElementById('submissionMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting to a server

        // Simple form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && subject && message) {
            // In a real application, you would send this data to a server here
            // For this example, we'll just show a success message
            submissionMessage.textContent = "Thank you for your message! We'll get back to you soon.";
            submissionMessage.style.display = 'block';
            contactForm.reset(); // Clear the form
        } else {
            submissionMessage.textContent = "Please fill out all fields.";
            submissionMessage.style.display = 'block';
        }
    });
});