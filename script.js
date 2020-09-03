// DOM ELEMENTS
const resultEl  = document.getElementById('password');
const lengthEl  = document.getElementById('length');
const sliderlengthEl = document.getElementById('sliderlength');
const lowercaseEl  = document.getElementById('lowercase');
const uppercaseEl  = document.getElementById('uppercase');
const numbercaseEl  = document.getElementById('numbers');
const specialcaseEl  = document.getElementById('symbols');
const emojicaseEl = document.getElementById('emojis');
const generateEl  = document.getElementById('generate');
const generateemojisEl  = document.getElementById('generate');
const clipboardEl  = document.getElementById('clipboard');


lengthEl.addEventListener("input", syncSlider)
sliderlengthEl.addEventListener("input", syncSlider)

function syncSlider(e) {
  const value = e.target.value
  lengthEl.value = value
  sliderlengthEl.value = value
}



const randomFunc = {
  lower: getLowerCase,
  upper: getUpperCase,
  number: getNumberCase,
  symbol: getSpecialCase,
  
};

const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbercase = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialcase = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
const emojicase = ['😀', '👨🏽‍✈️'];

// event listener
generateEl.addEventListener("click", () => {
  const length = parseInt(lengthEl.value);
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbercaseEl.checked;
  const hasSymbol = specialcaseEl.checked;



  resultEl.innerText = generatepassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length
    );
});

// generateEl.addEventListener("click", () => {
// const hasEmoji = emojicaseEl.checked;

// resultEl.innerText = generatepassword(
//   hasEmoji
// );


// Generate Password
function generatepassword(lower, upper, number, symbol, length) {

  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;

  console.log("typesCount " + typesCount);

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0]
  );

  console.log("typesArr" + typesArr);


  // Reject alerts
if(typesCount === 0) {
  alert("Cannot generate password. Please select at least one password requirement.")
  return "";
}

if(length < 8) {
  alert("Password is too short! Must be at least 8 digits long.")
  return "";
}

if(length > 128) {
  alert("Password is too long! Must be at 128 digits or less.")
  return "";
}



for(let i = 0; i < length; i += typesCount)
  typesArr.forEach(type => {
    const funcName = Object.keys(type)[0]
    // console.log("funcname: " + funcName)
    generatedPassword += randomFunc[funcName]()  
  });

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}




function getLowerCase() {
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getUpperCase() {
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getNumberCase() {
  return numbercase[Math.floor(Math.random() * numbercase.length)];
}

function getSpecialCase() {
  return specialcase[Math.floor(Math.random() * specialcase.length)];
}

// function getEmojiCase() {
//   return emojicase[Math.floor(Math.random() * emojicase.length)];
// }


console.log(getLowerCase());
console.log(getUpperCase());
console.log(getNumberCase());
console.log(getSpecialCase());
// console.log(getEmojiCase());














// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
