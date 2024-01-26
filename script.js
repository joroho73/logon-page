//  Get form elements
const btn = document.querySelector("#submitbutton");
const pwd = document.querySelector("#password");
const confpwd = document.querySelector("#confirmpassword");
const passwordMessage = document.querySelector('#passwordMessage')

//   Add event listeners for password validation
pwd.addEventListener('keyup', () => {
    let valid = checkpasswords(pwd.value,confpwd.value);
    setPasswordFields(valid)
});

confpwd.addEventListener('keyup', () => {
    let valid = checkpasswords(pwd.value,confpwd.value);
    setPasswordFields(valid)
});


//  Check to see the passwords match
const checkpasswords = (p1,p2) => {
    return p1 === p2 ? true : false;
    
    // if (p1 === p2){
    //     return true;
    // } else {
    //     return false;
    // }
}

//  Function to change the styles of the password inputs
//  and the message.
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

