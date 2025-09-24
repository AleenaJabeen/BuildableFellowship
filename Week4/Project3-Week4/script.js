// Function Declaration
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    // Function Expression
    const validatePhone = function(phone) {
      const phonePattern = /^[0-9]{10}$/; // 10 digits are for number only
      return phonePattern.test(phone);
    };

    // Arrow Function
    const passwordsMatch = (pass, confirmPass) => pass === confirmPass;

    // Main Form Validation
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
      event.preventDefault();

      const fullName = document.getElementById("Fullname").value.trim();
      const username = document.getElementById("Username").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phoneNumber").value.trim();
      const password = document.getElementById("password").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();
      const gender = document.querySelector('input[name="gender"]:checked');

      // Check for empty fields
      if (!fullName || !username || !email || !phone || !password || !confirmPassword) {
        alert("All fields are required.");
        return;
      }

      if (username.length < 3) {
        alert("Username must be at least 3 characters.");
        return;
      }

      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (!validatePhone(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
      }

      if (!passwordsMatch(password, confirmPassword)) {
        alert("Passwords do not match.");
        return;
      }

      if (!gender) {
        alert("Please select your gender.");
        return;
      }

      alert("Registration successful!");
      this.reset();
    });