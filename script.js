//Declare variables
var passwordTextarea = document.querySelector("#password");
var generateButton = document.querySelector("#generate");

//Declare characters used
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const numericalCharacters = "0123456789";

//Create function to generate password
function generatePassword() {
    
    var newPassword = "";
    var passwordCharset = "";

//Prompt for password length
var passwordLengthInput = prompt("How many characters?");
//Length conditional
if (Number(passwordLengthInput < 8) | Number(passwordLengthInput > 128) | isNaN(passwordLengthInput)) {
    alert("Please enter a number between 8 and 128!");
    return;
} 
//Special characters boolean
var specialCharactersInput = confirm("Do you want special characters?");
if (specialCharactersInput) {
    passwordCharset += specialCharacters;
}

//Uppercase letters boolean
var uppercaseCharactersInput = confirm("Do you want uppercase letters?");
if (uppercaseCharactersInput) {
    passwordCharset += uppercaseCharacters;
}

//Lowercase letters boolean
var lowercaseCharactersInput = confirm("Do you want lowercase letters?");
if (lowercaseCharactersInput) {
    passwordCharset += lowercaseCharacters;
}

//Numerical Characters boolean
var numericalCharactersInput = confirm("Do you want numbers?");
if (numericalCharactersInput) {
    passwordCharset += numericalCharacters;
}
//Alert if no type of characters were selected
if (passwordCharset === "") {
    alert("You must choose at least one type of character.");
  }

  //Conditional if password standards are met
if (Number(passwordLengthInput >= 8) && Number(passwordLengthInput <= 128)) {
    //Loop to generate new password
    for (var i = 0; i < passwordLengthInput; i++) {
        newPassword += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length));
    };
  //Storing generated password
  localStorage.setItem("password", newPassword);
  var newGenPassword = localStorage.getItem("password");
  passwordTextarea.textContent = newGenPassword;
  };

//Generate password event button
};
generateButton.addEventListener("click", generatePassword);