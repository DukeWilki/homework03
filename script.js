// DOM ELEMENTS
const resultEl  = document.getElementById('result');
const lengthEl  = document.getElementById('length');
const lowercaseEl  = document.getElementById('lowercase');
const uppercaseEl  = document.getElementById('uppercase');
const numbersEl  = document.getElementById('numbers');
const symbolsEl  = document.getElementById('symbols');
const generateEl  = document.getElementById('generate');
const clipboardEl  = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// event listener
generateEl.addEventListener("click", () => {
  const length = parseInt(lengthEl.value);
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatepassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length
    );
});

// Generate Password
function generatepassword(lower, upper, number, symbol, length) {

  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;

  console.log("typesCount " + typesCount);

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0]
  );

  console.log("typesArr" + typesArr);

if(typesCount === 0) {
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












function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+";
  return symbols[Math.floor(Math.random() * symbols.length)];
}


console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());














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
