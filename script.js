// Assign code + Event listener will aske a question when the button is pushed.

var generateBtn = document.querySelector("#generate");

document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "~"];
// Adding Variables
var confirmLength = "";
var confirmLowerCase = false;
var confirmUpperCase = false;
var confirmNumbers = false;
var confirmCharacters = false;
var password = "";

// Password input generating
function generatePassword() {
  var userInput = getUserInput()
  console.log(userInput)

  //Character will be store in the array when the user assign action
  var userCharacters = []

  // Character Condition value
  if (userInput.confirmLowerCase === true) {
    userCharacters = userCharacters.concat(lowerCase)
  }
  if (userInput.confirmUpperrCase === true) {
    userCharacters = userCharacters.concat(upperCase)
  }
  if (userInput.confirmNumbers === true) {
    userCharacters = userCharacters.concat(numbers)
  }
  if (userInput.confirmCharacters === true) {
    userCharacters = userCharacters.concat(characters)
  }
  console.log(userCharacters)

  // For loop to randomly select characters 
  for (var i = 0; i < userInput.confirmLength; i++) {
    var randomNumber = Math.floor(Math.random() * userCharacters.length)
    console.log(randomNumber)
    var randomLetter = userCharacters[randomNumber]
    console.log(randomLetter)
    password+=randomLetter

  }
  console.log(password)
  return password

}
// User will choose the length of characters in the input
function getUserInput () {
  confirmLength = prompt("Please choose from 4 to 18 characters");

  // User confirms the length in the input
  if (confirmLength < 4 || confirmLength > 18) {
    getUserInput()
  }
  
  // Creating limits of the password
confirmLowerCase = confirm("Click ok to add lower case");
confirmUpperCase=  confirm("Click ok to add Upper case");
confirmNumbers = confirm("Click ok to add number");
confirmCharacters = confirm("Click ok to add character");

// Loop when the input if out of the limits
if (confirmLowerCase === false && confirmUpperCase === false && 
  confirmNumbers === false && confirmCharacters === false) {
  alert("Please choose betwen 4 to 18 characters");
  getUserInput()
}
return {
  confirmLength: confirmLength,
  confirmLowerCase: confirmLowerCase,
  confirmUpperCase: confirmUpperCase,
  confirmNumbers: confirmNumbers,
  confirmCharacters: confirmCharacters
}
} 
 // The password generated will be added to the DOM
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
  // generateBtn.addEventListener("click", writePassword)}
