// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// 1. Array of special characters to be included in password
// 2. // Array of numeric characters to be included in password
// 3. // Array of lowercase characters to be included in password
// 4. // Array of uppercase characters to be included in password

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// empty array
 
var resultArray = [];
var userArray = [];

uppercaseArray [1]
//-----------------------------------------------------------------
  var numCharacter = prompt ("How long do you want your password to be");
  var numbers = confirm (" Do you want numbers in your password?");
  var uppercases = confirm (" do you want Uppercases in your password?");
  var lowercases = confirm (" Do you want lowercases in your password?");
  var characters = confirm (" Do you want special characters in your password?");


// condition of the array

if (numbers){
  resultArray = resultArray.concat(numbArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}

function copyToClipboard() {
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
