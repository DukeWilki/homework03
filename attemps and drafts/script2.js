// Assignment Code
var generateBtn = document.querySelector("#generate");
var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+`{}|[]:";
// var arr = "7";
var password = "";
var lowerReq = document.body.
// var lowerCase = "qwerrtyuiopasdfghjklzxcvbnm"
    // "a",  "b",  "c",  "d",  "e",  "f",  "g",  "h",  "i",  "j",
    // "k",  "l",  "m",  "n",  "o",  "p",  "q",  "r",  "s",  "t",
    // "u",  "v",  "w",  "x",  "y",  "z" ];
// var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
    // "A",  "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  
    // "K",  "L",  "M",  "N",  "O",  "P",  "Q",  "R",  "S",  "T",  
    // "U",  "V",  "W",  "X",  "Y",  "Z" ];
// var specialCase = [
//     "~",  "`",  "!",  "@",  "#",  "$",  "%",  "^",  "&",  "*",  
//     "(",  ")",  "-",  "_",  "=",  "+",  "{",  "}",  "[",  "]",
//     "|",  "\\", ":",  ";",  "'",  '"',  "<",  ">",  ",",  ".",
//     "/",  "?" ];
// var mainArray = [    ...lowercase];
// var eligible = [];






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
    // LOWER CLASS
    var lowerReq = confirm("Press OK if you require at least one lower class letter?");
    if (lowerReq === true) {
    console.log("Lower case required: " + lowerReq);
    alert("thanks");
    eligible = [eligible, ...lowerCase];
    console.log(eligible)}
    else {
    console.log("Lower case required: " + lowerReq);}

    // UPPER CLASS
    var upperReq = confirm(
      "Press OK if you require at least one upper class letter?");
    if (upperReq === true) {
        console.log("Lower case required: " + upperReq);
        alert("THANK YOU");
        eligible = [eligible, ...upperCase];
        console.log(eligible)}
        else {
        console.log("Lower case required: " + upperReq);}

    // NUMBER CLASS
    var numberReq = confirm("Press OK if you require at least one number?");
    console.log("Numbers required: " + numberReq);
    // add to array

    // SPECIAL CLASS
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
    } else {
      console.log("Password to be created");
    //   getRandom();
      createpassword();
    }
  }

// function getRandom() {
//     if (lowerReq === true)
//     return lowerCase[Math.floor(Math.random() * lowerCase.length)];
//     console.log(lowerCase)
// }




    //create for loop to choose charachters

    function createpassword() {
    for (var i = 0; i <= lengthReq; i++) {
      password =
        password +
        eligible.charAt(
          Math.floor(Math.random() * Math.floor(eligible.length - 1))
        );
    

    // add password to text area
    document.getElementById("password").value = password;
  }
}
}