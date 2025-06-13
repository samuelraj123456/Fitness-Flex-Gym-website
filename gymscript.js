document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("form-msg");
  
    if (!name || !email || !message) {
      msg.textContent = "Please fill in all fields.";
      msg.style.color = "red";
    } else {
      msg.textContent = `Thank you, ${name}! We will contact you soon.`;
      msg.style.color = "green";
      this.reset();
    }
  });