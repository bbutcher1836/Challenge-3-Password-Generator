document.addEventListener("DOMContentLoaded", function() {
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");
  passwordLength = parseInt(passwordLength);

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert("Invalid password length. Please enter a valid length between 8 and 128 characters.");
    return "";
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if(!includeLowercase && !includeUppercase && ! includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[];:?<>,./-=";
  var availableChars = "";
  var password = "";

  if (includeLowercase) {
    availableChars += lowercaseChars;
    password += getRandomChar(lowercaseChars);
  }

  if (includeUppercase) {
    availableChars += uppercaseChars;
    password += getRandomChar(uppercaseChars);
  }

  if (includeNumeric) {
    availableChars += numericChars;
    password += getRandomChar(numericChars);
  }

  if (includeSpecial) {
    availableChars += specialChars;
    password += getRandomChar(specialChars);
  }

  for (var i = password.length; i < passwordLength; i++) {
    password += getRandomChar(availableChars);
  }

  return password;
}

function getRandomChar(characters) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}
});

