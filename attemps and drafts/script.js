// Assignment Code
var generateBtn = document.querySelector("#generate");

function promptMe() {
  var lengthReq = prompt("What is the length for your password?");
  if (lengthReq < 8 || lengthReq > 128 || isNaN(lengthReq)) {
    console.log("Invalid length of password: " + lengthReq);
    alert("Password must be between 8 and 128 digits long");
  } else {
    console.log("Valid length of password: " + lengthReq);
    askvariables();
  }
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
  if (
    lowerReq === false &&
    upperReq === false &&
    numberReq === false &&
    specialReq === false
  ) {
    console.log("Invalid boolean selection to create password");
    alert(
      "Password must be contain at least one of lower case case letters, upper case letters, numbers or special charachters"
    );
  } 

  else {
    console.log("Password to be created");
    // var bigArray = "";
    // if (lowerReq === true && upperReq === true && numberReq === true && numberReq === true) {
    // bigArray = [...lowerCase, ...upperCase, ...specialCase, ...numberCase];
    // console.log(bigArray)
    // }


  // else if {
  //   console.log("Password to be created");
  //   var bigArray = "";
  //   if (upperReq === true && numberReq === true && numberReq === true) {
  //   bigArray = [...lowerCase, ...upperCase, ...specialCase, ...numberCase];
  //   console.log(bigArray)
  //   }
    else {
    console.log(bigArray)
    }
  }
}

//list of arrays
var specialCase = [
  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  
  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];

// Array of numeric characters
var numberCase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters
var lowerCase = [
  'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',  'i',  'j',  'k',  'l',  'm',
  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];

// Array of uppercase characters 
var upperCase = [
  'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',  'I',  'J',  'K',  'L',  'M',  
  'N',  'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var numberReq = Math.floor(Math.random() * 10);

// var charArray = [lowerCase, upperCase, SpecialCase];

// add onlty ture values to this arrat if/else statemwents

// Write password to the #password input
// empty array to contain pw to be created via forloop
// forloop  - get random from current array and store in a var - push into pw array

// function creator (len, u, l, s, n)

// function createArray() {
// var bigArray = [];
// if (upperReq === true && numberReq === true && numberReq === true) {
// bigArray = [bigArray, ...lowerCase, ...upperCase, ...specialCase, ...numberCase];
// console.log(bigArray)
// }
// else {
// console.log(bigArray)
// }
// }



// var pwArr = [];
// if lowerReq(true) {
//   pwArr.push('a');
// }
// pwArr.push('b');

function writePassword(reqLength, lowerCase, UpperCase, specialCase) {









  // alert(
  //   "Password is " +
  //     lowerCase[Math.floor(Math.random() * lowerCase.length)] +
  //     upperCase[Math.floor(Math.random() * upperCase.length)] +
  //     SpecialCase[Math.floor(Math.random() * SpecialCase.length)] +
  //     Math.floor(Math.random() * 10) +
  //     pwArr[Math.floor(Math.random() * pwArr.length)]
  // );

  // function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#lowerCase");

  // function writePassword() {
  //   // lowerCase[Math.floor(Math.random()*lowerCase.length)];
  //   alert("Password is ");
  // }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("button", writePassword);
