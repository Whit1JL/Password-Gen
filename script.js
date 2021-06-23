// Assignment Code
var generateBtn = document.querySelector("#generate");
// Left userPassword as a blank string because it will change as password is generated
var userPassword = "";
// Variable index is open-ended which helps with the randomness necessary for particular assignment
var index ; 


var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!", "@", "#", "$", "&", "*", "^"]

//write function that generates possible choices
function getChoices() {
    var length = parseInt(prompt("How many characters would you like for password? Choose between 8 or 128 characters."));
    
    //validate user input 
    if (Number.isNaN(length)) {
        alert("That's not a number");   
    }

    if (length < 8 || length > 128) {
        alert("Not acceptable");
    }
    
    // Utilize confirm prompt to have user choose if they want to use certain characters or not
    var useUppercase = confirm("Click okay if you want to use uppercase letters");
    console.log(useUppercase);
    var useLowercase = confirm("Click okay if you want to use lowercase letters");
    console.log(useLowercase);
    var useNumeric = confirm("Click okay if you want to use numeric characters");
    console.log(useNumeric);
    var useSpec = confirm("Click okay if you want to use special characters");
    console.log(useSpec);
 
    // store user options

    var userOptions = {
        length, 
        useUppercase, 
        useLowercase,
        useNumeric,
        useSpec,
    }
    console.log(userOptions);
    return userOptions;
}

// validate user input ... at least 1 of those has to be true for conditional
// best option is to use a while loop

while(userPassword.length <= length) {
    if(useUppercase) {
        index = indexRandom(uppercase.length);
        userPassword = userPassword + uppercase[index];
    }
    if(useLowercase) {
        index = indexRandom(lowercase.length); 
        userPassword = userPassword + lowercase[index];    
    }
    if(useNumeric) {
        index = indexRandom(numeric.length);
        userPassword = userPassword + numeric[index];
    }
    if(useSpec) {
        index = indexRandom(special.length);
        userPassword = userPassword + special[index];
    }
}

// write a function that generates the password 
function generatePassword() {
    var preferences = getChoices();
    console.log(preferences);
    // return password;
}

// build password of specified number of characters (Rich's example)
// for(let x = 0; x < numCharacters; x++) {
    // let randomCharacter = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    // console.log("Random Character", randomCharacter);
    // password = password + availableCharacters[0];
// }
// return password; 

// for(let i = 0; i < length; i++) {
//     let ____ = userOptions[Math.floor(Math.random() * userOptions.length)];
//     console.log("________", ____);
//     password = password + userOptions[0];
// }
// return ___________; 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
