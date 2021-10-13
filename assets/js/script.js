// Assignment code here

var randomNumber = function(min,max){
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
}

// Variables

var Lowercases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Uppercases =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var Symbols =["!", "$", "#", "@", "%", "^", "&", "*", "(", ")", "-", "+", ";", "'", ",", ".", "/", "?", "~"];


// Generator function

function generatePassword() {

    //ask for length of password
    var passwordLength = window.prompt("How many characters would you like your password to be. Choose a number between 8 and 128");

    // making passwordLength into a int
    var newPass = parseInt(passwordLength);

    //checks condition of int value from the entered value. Then returns to the function above if number is not within the parameters
    // calls back to the function even if they click "cancel"
    if (newPass < 8 || newPass > 128 || !newPass) {
      window.alert("You must enter a valid number. Try again please.");
      return generatePassword();

    }
}

// filler array
var infoArray = [];

var lowercasesPrompt = window.confirm("Would you like lowercases in your password?");
if (lowercasesPrompt) {
  // if this is true, add characters into the infoArray
  infoArray = infoArray.concat(Lowercases);
}

var uppercasesPrompt = window.confirm("Would you like uppercases in your password?");
if (lowercasesPrompt) {
  // if this is true, add characters into the infoArray
  infoArray = infoArray.concat(Uppercases);
}

var numbersPrompt = window.confirm("Would you like numbers in your password?");
if (numbersPrompt) {
  // if this is true, add characters into the infoArray
  infoArray = infoArray.concat(Numbers);
}

var symbolsPrompt = window.confirm("Would you like symbols in your password?");
if (symbolsPrompt) {
  // if this is true, add characters into the infoArray
  infoArray = infoArray.concat(Symbols);
}

console.log(infoArray);

var realPass = [];

// password array function
function passwordGen(){

  // Forloop for making the password with each character

  for (let i=0; i < passwordLength; i++) {
    var xChar = randomNumber(0,infoArray.length-1);
      realPass.push(infoArray[xChar]);
  }
  
  // Boolean to check if info given matches in the passwordGen
  var boolInfo = false;
  if (lowercasesPrompt) {
    for (let i=0; i < Lowercases.length && boolInfo == false; i++) {
      boolInfo = realPass.includes(Lowercases[i])
    }
      if (boolInfo == false) {
        return passwordGen();
      }
      return !boolInfo;
  }


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
