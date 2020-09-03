// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerReq = 'abcdefghijklmnopqrstuvwxyz';
var upperReq = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberReq = '0123456789';
var specialReq = '!@#$%^&*=-_';

function promptMe() {
  var lengthReq = prompt("What is the length for your password?");
  if (lengthReq < 8 || lengthReq > 128 || isNaN(lengthReq)) {
    console.log("Invalid length of password: " + lengthReq);
    alert("Password must be between 8 and 128 digits long");
  } else {
    console.log("Valid length of password: " + lengthReq);
    askvariables()
  }
  
  function askvariables() {
    var lowerReq = confirm(
      "Press OK if you require at least one lower class letter?"
    );
    console.log("Lower case required: " + lowerReq);
    // add to array
    
    
    var upperReq = confirm(
      "Press OK if you require at least one upper class letter?"
    );
    console.log("Upper case required: " + upperReq);
    // add to array
    
    
    var numberReq = confirm("Press OK if you require at least one number?");
    console.log("Numbers required: " + numberReq);
    // add to array
    
    
    var specialReq = confirm(
      "Press OK if you require at least one special charachter?"
    );
    console.log("Special charachters required: " + specialReq);

    var typeCount = lowerReq + upperReq + numberReq + specialReq;
    console.log("typeCount is " + typeCount)

    const typeArray = [{lowerReq}, {upperReq}, numberReq, specialReq];
    console.log("typeArray is " + typeArray)
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}