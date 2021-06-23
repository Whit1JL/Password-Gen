// Assignment Code
var generateBtn = document.querySelector("#generate");
// Left userPassword as a blank string because it will change as password is generated
var userPassword = "";
// Variable index is open-ended which helps with the randomness necessary for particular assignment
var index;

// arrays 
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special = ["!", "@", "#", "$", "&", "*", "^"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

    // store user options in object

    var userOptions = {
        length: length,
        useUppercase: useUppercase,
        useLowercase: useLowercase,
        useNumeric: useNumeric,
        useSpec: useSpec,
    }

    console.log(userOptions);
    //return userOptions
    return (userOptions);
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// write a function that generates the password 
function generatePassword() {
    var preferences = getChoices();
    console.log(preferences);

    // console.log(userOptions);
    while (userPassword.length <= length) {
        if (preferences.useUppercase) {
            index = indexRandom(uppercase.length);
            userPassword = userPassword + uppercase[index];
        }
        if (prefererences.useLowercase) {
            index = indexRandom(lowercase.length);
            userPassword = userPassword + lowercase[index];
        }
        if (preferences.useNumeric) {
            index = indexRandom(numeric.length);
            userPassword = userPassword + numeric[index];
        }
        if (preferences.useSpec) {
            index = indexRandom(special.length);
            userPassword = userPassword + special[index];
        }
    }
console.log("hello", userPassword); 

return userPassword;
}

// build password of specified number of characters (Rich's example)
// for(let x = 0; x < numCharacters; x++) {
// let randomCharacter = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
// console.log("Random Character", randomCharacter);
// password = password + availableCharacters[0];
// }
// return password; 

// my version... 
// for(let i = 0; i < length; i++) {
//     let ____ = userOptions[Math.floor(Math.random() * userOptions.length)];
//     console.log("________", ____);
//     password = password + userOptions[0];
// }
// return ___________; 