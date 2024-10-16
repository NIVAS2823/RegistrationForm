document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Retrieve form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Validate form fields
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
  
    // Password length validation
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
  
    // Confirm Password validation
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter.");
      return;
    }
  
    // Form data object
    const formData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
      email: email,
      password: password
    };
  
    console.log(formData);
    alert("Form submitted successfully!");
  
    // Reset form
    document.getElementById("registrationForm").reset();
  });
  