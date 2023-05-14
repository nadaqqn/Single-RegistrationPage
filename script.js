var invalidPhone = document.getElementById ("phone_error");

var phoneInput = document.getElementById ("phone");



phoneInput.addEventListener("blur", function() {
    var phone = phoneInput.value;
    var phonePattern = /^[+0-9]+$/;
    
    if (phonePattern.test(phone)) {
      invalidPhone.style.display = "none";
      
    } else {
      invalidPhone.style.display = "block";
    }
  });

var invalidEmail = document.getElementById ("email_error");

var emailInput = document.getElementById ("email");

emailInput.addEventListener("blur", function() {
    var email = emailInput.value;
    var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    
    if (emailPattern.test(email)) {
      invalidEmail.style.display = "none";
      
    } else {
      invalidEmail.style.display = "block";
    }
  });

  /* Toggle the password visibility */
const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('togglePassword');

toggleButton.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.textContent = 'Hide Password';
  } else {
    passwordInput.type = 'password';
    toggleButton.textContent = 'Show Password';
  }
});


