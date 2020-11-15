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