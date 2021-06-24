// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// numCharacters is new variable instead of "length"
var numCharacters = parseInt(numCharacters);
// Variable index is open-ended which helps with the randomness necessary for particular assignment
var index;
// arrays 
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special = ["!", "@", "#", "$", "&", "*", "^"];
// Write password to the #password input
function writePassword() {
    var password = getChoices();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
//write function that generates possible choices
function getChoices() {
    var numCharacters = prompt("How many characters would you like for password? Choose between 8 and 128 characters.");
    console.log("num characters", numCharacters);
    //validate user input 
    if (Number.isNaN(numCharacters)) {
        alert("That's not a number");
    }
    if (numCharacters < 8 || numCharacters > 128) {
        alert("Not acceptable");
        var numCharacters = prompt("How many characters would you like for password? Choose between 8 and 128 characters.");
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
    // Left userPassword as a blank string because it will change as password is generated
    var password = ''
    //while the length is correct, if the user clicks yes to lowercase, uppercase, numberic or special it will math.random the length of the array and set the new user password
    while (password.length <= numCharacters) {
        if (useLowercase) {
            index = indexRandom(lowercase.length)
            password = password + lowercase[index]
        }
        if (useUppercase) {
            index = indexRandom(uppercase.length)
            password = password + uppercase[index]
        }
        if (useNumeric) {
            index = indexRandom(numeric.length)
            password = password + numeric[index]
        }
        if (useSpec) {
            index = indexRandom(special.length)
            password = password + special[index]
        }
    }
    //returning the new user password
    return password;
}
//function that randomizes the index of characters
function indexRandom(max) {
    return Math.floor(Math.random() * max);
}