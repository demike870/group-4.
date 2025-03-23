function validateForm(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
  
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";
  
    let isValid = true;
  
    if (name === "") {
      nameError.innerHTML = "Name is required.";
      isValid = false;
    }
  
    const emailPattern = /^[^\s@]+@gmail\.com$/;
    if (email === "") {
      emailError.innerHTML = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.innerHTML = "Email must be a valid @gmail.com address.";
      isValid = false;
    }
  
    if (password === "") {
      passwordError.innerHTML = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.innerHTML = "Password must be at least 6 characters long.";
      isValid = false;
    }
  
    if (confirmPassword === "") {
      confirmPasswordError.innerHTML = "Password confirmation is required.";
      isValid = false;
    } else if (password !== confirmPassword) {
      confirmPasswordError.innerHTML = "Passwords do not match.";
      isValid = false;
    }
  
    if (isValid) {
      alert("Submitted successfully!");
      document.getElementById("subscriptionForm").reset();
    }
  }
  