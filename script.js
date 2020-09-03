// DOM ELEMENTS
const passwordText = document.getElementById("password");
const generateBtn = document.getElementById("generate");

// Arrays and objects
const randomFunc = {
  lower: getLowerCase,
  upper: getUpperCase,
  number: getNumberCase,
  special: getSpecialCase,
};

const lowercase = [
  "a",  "b",  "c",  "d",
  "e",  "f",  "g",  "h",
  "i",  "j",  "k",  "l",
  "m",  "n",  "o",  "p",
  "q",  "r",  "s",  "t",
  "u",  "v",  "w",  "x",
  "y",  "z",
];
const uppercase = [
  "A",  "B",  "C",  "D",
  "E",  "F",  "G",  "H",
  "I",  "J",  "K",  "L",
  "M",  "N",  "O",  "P",
  "Q",  "R",  "S",  "T",
  "U",  "V",  "W",  "X",
  "Y",  "Z",
];
const numbercase = [
  "0", "1", "2", "3", "4", 
  "5", "6", "7", "8", "9"
];
const specialcase = [
  "@",  "%",  "+",  "\\",
  "/",  "'",  "!",  "#",
  "$",  "^",  "?",  ":",
  ",",  ")",  "(",  "}",
  "{",  "]",  "[",  "~",
  "-",  "_",  ".",
];

const mainArray = [];

// event listener and parameter prompts
generateBtn.addEventListener("click", () => {
  const length = parseInt(prompt("How long is your password? (must have 8 to 128 digits)"));
  const hasLower = confirm("Press OK to include lower class letters");
  const hasUpper = confirm("Press OK to include upper class letters");
  const hasNumber = confirm("Press OK to include numbers");
  const hasSpecial = confirm("Press OK to include special charachters");

  //Validation
  if (
    hasLower === false &&
    hasUpper === false &&
    hasNumber === false &&
    hasSpecial === false
  ) {
    console.log("Password requirements: INVALID");
    alert("Not enough details to create password. ☹ Please try again.");
  } else {
    console.log("Charachter types: OK");
  }
  if (length < 8 || length > 128 || isNaN(length)) {
    console.log("Password length: INVALID");
    alert(
      "Password length invalid, must be 8 to 128 digits long. ☹ Please try again."
    );
  } else {
    console.log("Password length: OK");
  }

  passwordText.innerText = writepassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSpecial,
    length
  );
});

// Generate Password
function writepassword(lower, upper, number, special, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + special;
  console.log("Charachter types: " + typesCount);
  const mainArray = [{ lower }, { upper }, { number }, { special }].filter(
    (item) => Object.values(item)[0]
  );

  // Reset output for invalid options
  if (typesCount === 0) {
    return "";
  }
  if (length < 8 || length > 128 || isNaN(length)) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount)
    mainArray.forEach((type) => {
      const funcName = Object.keys(type)[0];

      generatedPassword += randomFunc[funcName]();
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