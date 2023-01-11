// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
getPasswordOptions();
arrayGenerator();
getRandom(selectedCharacters);


// Function to prompt user for password options
function getPasswordOptions() {
  userLength = prompt('How many characters would you like your password to be?')

  if (userLength < 10 || userLength > 64) {
    alert('Please pick a length between 10 and 64')
    getPasswordOptions();
  }
  else {
    userLength = userLength 
  }

  confirmCharacter = {
    upperCase: confirm('Would you like your password to contain uppercase characters?'),
    numericChar: confirm('Would you like your password to contain numbers'),
    specialChar: confirm('Would you like your password to contain special characters?'),
    lowerCase: confirm('Would you like your password to contain lowercase characters?'),
  }
  confirmCharacterArray = [
    confirmCharacter.upperCase,
    confirmCharacter.numericChar,
    confirmCharacter.specialChar,
    confirmCharacter.lowerCase,
  ]

  if (confirmCharacter.upperCase == false &&
    confirmCharacter.numericChar == false &&
    confirmCharacter.specialChar == false &&
    confirmCharacter.lowerCase == false) {
    alert('Please select one type of character')
    getPasswordOptions();
  }
}

// Function for forming an array to randomly pick from
function arrayGenerator() {
  let allCharacters = upperCasedCharacters.concat(numericCharacters, specialCharacters, lowerCasedCharacters)
  let characterArray = [
    upperCasedCharacters,
    numericCharacters,
    specialCharacters,
    lowerCasedCharacters,
  ]

  for (let i = 0; i < confirmCharacterArray.length; i++) {
    if (i == 0) {
      if (confirmCharacterArray[i] == false) {
    
        //console.log(allCharacters)
        selectedCharacters = allCharacters.filter(function (item) { 
          return characterArray[i].indexOf(item) == -1;  
        });       
      }
      else {
        selectedCharacters = allCharacters
      }   
    }
    else if (confirmCharacterArray[i] == false) {
      selectedCharacters = selectedCharacters.filter(function (item) { 
        return characterArray[i].indexOf(item) == -1;  
      });    
    } 
  }
console.log(selectedCharacters)
}


// Function for getting a random element from an array
function getRandom(arr) {
  let randomCharacterLocation = Math.floor(Math.random() * arr.length)
  let randomCharacter = selectedCharacters[randomCharacterLocation]
  return String(randomCharacter)  
}

// Function to generate password with user input
function generatePassword() {
  let practicePassword = "";
  for (let i = 0; i < userLength; i++) { 
   practicePassword += getRandom(selectedCharacters)
  }
  return practicePassword;
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate'); 

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);