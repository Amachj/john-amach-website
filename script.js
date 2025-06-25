// Contact form submission with EmailJS
(function() {
  emailjs.init("K08YgkCDc31soYiqD"); // Replace with your EmailJS public key

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      const params = {
        from_name: name,
        from_email: email,
        message: message
      };

      emailjs.send("service_qiztktw", "template_sci8uc2", params)
        .then(() => {
          document.getElementById('formMessage').textContent = 'Message sent successfully! I will get back to you soon.';
          document.getElementById('contactForm').reset();
        }, (error) => {
          document.getElementById('formMessage').textContent = 'Failed to send message. Please try again later.';
          console.error('EmailJS Error:', error);
        });
    } else {
      document.getElementById('formMessage').textContent = 'Please fill in all fields.';
    }
  });
})();

