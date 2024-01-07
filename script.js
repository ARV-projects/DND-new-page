// JavaScript pentru trimiterea formularului prin email
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch('https://api.email.com/send', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Message sent successfully!');
      this.reset();
    } else {
      throw new Error('Message failed to send.');
    }
  })
  .catch(error => {
    alert(error.message);
  });
});
