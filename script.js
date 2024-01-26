//  Get form elements
const btn = document.querySelector("#submitbutton");
const pwd = document.querySelector("#password");
const confpwd = document.querySelector("#confirmpassword");
const passwordMessage = document.querySelector("#passwordMessage");
const passwordFormatMessage = document.querySelector("#passwordFormatMessage")
const submitbutton = document.querySelector("#submitbutton")

//   Add event listeners for password validation
pwd.addEventListener('keyup', () => {
    let valid = checkPasswords(pwd.value,confpwd.value);
    setPasswordFields(valid)
});

confpwd.addEventListener('keyup', () => {
    let valid = checkPasswords(pwd.value,confpwd.value);
    setPasswordFields(valid)
});


//  Function to check if passwords match
const checkPasswords = (p1,p2) => {
    passwordStrengthMessage = checkPasswordStrength(p1);
    // set PasswordFormatMessage's text and format 
    passwordFormatMessage.innerText = passwordStrengthMessage;
    if (passwordStrengthMessage.length > 21) {
        passwordFormatMessage.classList.add("passwordMessageFalse");
        passwordFormatMessage.classList.remove("passwordMessageTrue");
    } else {
        passwordFormatMessage.classList.add("passwordMessageTrue");
        passwordFormatMessage.classList.remove("passwordMessageFalse");
    }
    return p1 === p2 ? true : false;
}

//  Function to change the styles of the password inputs
//  and the message when passwords match, or not.
function setPasswordFields(val){
    if (val == true) {
        passwordMessage.innerText = "passwords match!";
        passwordMessage.classList.add("passwordMessageTrue");
        passwordMessage.classList.remove("passwordMessageFalse");
        pwd.setCustomValidity("");
        confpwd.setCustomValidity("");
    } else if (val == false){
        passwordMessage.innerText = "passwords must match!";
        passwordMessage.classList.add("passwordMessageFalse");
        passwordMessage.classList.remove("passwordMessageTrue");
        pwd.setCustomValidity("passwords must match!");
        confpwd.setCustomValidity("passwords must match!");
        console.log('setPasswordFields:false')
    }
}

function checkPasswordStrength(password) {
    // Initialize variables
    var strength = 0;
    var tips = "";
  
    // Check password length
    if (password.length < 8) {
      tips += "Make the password longer. ";
    } else {
      strength += 1;
    }
  
    // Check for mixed case
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
      strength += 1;
    } else {
      tips += "Use both lowercase and uppercase letters. ";
    }
  
    // Check for numbers
    if (password.match(/\d/)) {
      strength += 1;
    } else {
      tips += "Include at least one number. ";
    }
  
    // Check for special characters
    if (password.match(/[^a-zA-Z\d]/)) {
      strength += 1;
    } else {
      tips += "Include at least one special character. ";
    }
  
    // Return results
    if (strength < 2) {
      return "Easy to guess. " + tips;
    } else if (strength === 2) {
      return "Medium difficulty. " + tips;
    } else if (strength === 3) {
      return "Difficult. " + tips;
    } else {
      return "Extremely difficult. " + tips;
    }
  }

  function setButtonStatus(){
    if (passwordStrengthMessage.length < 22 && passwordMessage.innerText == "passwords match!") {
        submitbutton.className = "active";
    } else {
        submitbutton.className = "inactive";

    }
  }
