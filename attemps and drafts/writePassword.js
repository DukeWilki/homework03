function writePassword() {
  var lengthReq = prompt("What is the length for your password?");
  if (lengthReq < 8 || lengthReq > 128 || isNaN(lengthReq)) {
    console.log("Invalid length of password: " + lengthReq);
    alert("Password must be between 8 and 128 digits long");
  }
  else {
    console.log("Valid length of password: " + lengthReq);
    askvariables();
  }
}
