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
  var lengthReq = prompt("What is the length for your password?");
  if (lengthReq < 8 || lengthReq > 128 || isNaN(lengthReq)) {
    alert("Password must be between 8 and 128 digits long");
  }
else
  var lowerReq = confirm("Does it require at least one lower class letter?");
  var upperReq = confirm("Does it require at least one upper class letter?");
  var numberReq = confirm("Does it require at least one number?");
  var specialReq = confirm("Does it require at least one special charachter?");

}