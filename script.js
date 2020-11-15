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
if (Number(passwordLengthInput < 8) | Number(passwordLengthInput > 128) | isNaN(passwordLengthInput)) {
    alert("Please enter a number between 8 and 128!");
    return;
} 