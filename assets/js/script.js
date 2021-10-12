// Assignment code here

var randomNumber = function(min,max){
  var value = Math.floor(Math.random() * (max - min));
  return value;
}

// Variables

var Lowercases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Uppercases =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var Symbol =["!", "$", "#", "@", "%", "^", "&", "*", "(", ")", "-", "+", ";", "'", ",", ".", "/", "?", "~"];


// Generator function

function generatePassword() {

    //ask for length of password
    var passwordLength = window.prompt("How many characters would you like your password to be. Choose a number between 8 and 128");

    // making passwordLength into a int
    var newPass = newInt(passwordLength);

    //checks condition of int value from the entered value. Then returns to the function above if number is not within the parameters
    if (newPass < 8 || newPass > 128 || !newPass) {
      window.alert("You must enter a vlaid number. Try again please.");
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

var lowercasesPrompt = window.confirm("Would you like lowercases in your password?");
if (lowercasesPrompt) {
  // if this is true, add characters into the infoArray
  infoArray = infoArray.concat(Lowercases);
}

var lowercasesPrompt = window.confirm("Would you like lowercases in your password?");
if (lowercasesPrompt) {
  // if this is true, add characters into the infoArray
  infoArray = infoArray.concat(Lowercases);
}

var lowercasesPrompt = window.confirm("Would you like lowercases in your password?");
if (lowercasesPrompt) {
  // if this is true, add characters into the infoArray
  infoArray = infoArray.concat(Lowercases);
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
