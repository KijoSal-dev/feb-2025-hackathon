document.addEventListener('DOMContentLoaded'), function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // You'll need to replace this with your actual form submission logic
            // using fetch or XMLHttpRequest to send the data to your server.

            // Example using fetch (requires a server-side endpoint to handle the form data)
            const formData = new FormData(contactForm);

            fetch('your-form-submission-endpoint', { // Replace with your actual endpoint
                method: 'POST',
                body: formData,
            })
            .then(response => {
                if (response.ok) {
                    return response.text(); // Or response.json() if your server returns JSON
                } else {
                    throw new Error('Form submission failed: ' + response.status);
                }
            })
            .then(data => {
                formMessage.textContent = 'Message sent successfully!';
                formMessage.className = 'success-message'; // Add a class for styling (optional)
                contactForm.reset(); // Clear the form
            })
            .catch(error => {
                console.error('Error:', error);
                formMessage.textContent = 'An error occurred. Please try again later.';
                formMessage.className = 'error-message'; // Add a class for styling (optional)
            });
    });
    }}