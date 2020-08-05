// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// Choices

var length = [0];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChar = ['!','@','#','$','%','^','&','*'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];

// Confirming those choices

var confirmLength;
var confirmUpperCase;
var confirmLowerCase;
var confirmSpecialChar;
var confirmNumbers;

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// Generating the password!

function generatePassword() {

  // Confirming the number of characters

  var confirmLength = (prompt('How long would you like your password to be?'));

  // Oopsies for the above confirmation

    while(confirmLength <= 7) {
      alert("Password must contain at least 8 characters");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
    }
    
    while(confirmLength >= 127) {
      alert("Password must not exceed 128 characters");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
    }

  // Confirming the rest, 'YES' or 'NO' ('OK' or 'Cancel')

  var confirmUpperCase = confirm("Click 'OK' for 'YES' and 'Cancel' for 'NO'");
  var confirmLowerCase = confirm("Click 'OK' for 'YES' and 'Cancel' for 'NO'");
  var confirmSpecialChar = confirm("Click 'OK' for 'YES' and 'Cancel' for 'NO'");
  var confirmNumbers = confirm("Click 'OK' for 'YES' and 'Cancel' for 'NO'");

  // Oopsies for the above confirmations

    while(confirmUpperCase === false && confirmLowerCase=== false && confirmSpecialChar === false && confirmNumbers === false){
      alert("Please select at least one");
      var confirmUpperCase = confirm("Click 'OK' for 'YES' and 'Cancel' for 'NO'");
      var confirmLowerCase = confirm("Click 'OK' for 'YES' and 'Cancel' for 'NO'");
      var confirmSpecialChar = confirm("Click 'OK' for 'YES' and 'Cancel' for 'NO'");
      var confirmNumbers = confirm("Click 'OK' for 'YES' and 'Cancel' for 'NO'");
    }

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  // The PASSWORD!

  var passwordAssets = [];

  if(confirmUpperCase && confirmLowerCase && confirmSpecialChar && confirmNumbers){
    passwordAssets = passwordAssets.concat(confirmUpperCase) + passwordAssets.concat(confirmLowerCase) + passwordAssets.concat(confirmSpecialChar) + passwordAssets.concat(confirmNumbers);
  }

  var thePassword = ' ';

  for(var i = 0; i < confirmLength; i++) {
    thePassword = passwordAssets[Math.floor(Math.random() * passwordAssets.length)];
  }

  return thePassword;

}

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// Present the password (in the same input box)

function presentPassword() {
  var passwordEthos = generatePassword();
  var presentedPW = document.querySelector(#password);

  presentedPW.value = passwordEthos;
  
}