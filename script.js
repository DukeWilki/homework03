


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function promptMe(){
  var minLength = prompt("What is the minimum length for your password?");
  var maxLength = prompt("What is the mmaximum length for your password?");
  var lowerReq = confirm("Does it requirre at least one lower class letter?");
  var upperReq = confirm("Does it requirre at least one upper class letter?");
  var numberReq = confirm("Does it requirre at least one number?");
  var specialReq = confirm("Does it requirre at least one lspecial charachter?");
  alert ("Password must be between " + minLength + 
          " and " + maxLength + 
          " charachters long, requires: " + 
          "Lowercase letters: " + lowerReq +
          " | Uppercase letters: " + upperReq  +
          " | Numbers: " + numberReq +    
          " | Special charachters: " + specialReq );
}