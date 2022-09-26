// User input variables:
var enter;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmCharacter;

// Starting Password variable values:
// Lowercase characters
alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Uppercase characters
alphaUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Special characters
character = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Starts generating password function
function generatePassword() {
  // Asks for input how many characters
  enter = parseInt(
    prompt(
      "How many characters do you want in your password?\n\nEnter a number between 8 and 128\n"
    )
  );
  // First if statement for user validation
  if (!enter || enter < 8 || enter > 128) {
    alert("You must enter an actual number between 8 and 128");
    return generatePassword();
  } else {
    // Continues once user input is validated
    // Start user input prompts
    confirmLowercase = confirm(
      "Do you want to use Lowercase letters?\n\nSelect OK for YES or Cancel for NO"
    );
    confirmUppercase = confirm(
      "Do you want to use Uppercase letters?\n\nSelect OK for YES or Cancel for NO"
    );
    confirmNumber = confirm(
      "Do you want to use a number?\n\nSelect OK for YES or Cancel for NO"
    );
    confirmCharacter = confirm(
      "Do you want to use special characters?\n\nSelect OK for YES or Cancel for NO"
    );
  }

  // First if statement that uses user input prompts to determine choices
  // Else if for 4 negative options
  if (
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmNumber &&
    !confirmCharacter
  ) {
    choices = alert("You must select OK for at least one of the choices!");
    return generatePassword();
  }

  // Else if for 4 positive options
  else if (
    confirmLowercase &&
    confirmUppercase &&
    confirmNumber &&
    confirmCharacter
  ) {
    choices = character.concat(alpha, alphaUpper, number, confirmCharacter);
  }

  // Else if for 3 positive options
  else if (confirmLowercase && confirmUppercase && confirmNumber) {
    choices = number.concat(alpha, alphaUpper);
  } else if (confirmLowercase && confirmUppercase && confirmCharacter) {
    choices = character.concat(alpha, alphaUpper);
  } else if (confirmLowercase && confirmNumber && confirmCharacter) {
    choices = character.concat(alpha, number);
  } else if (confirmUppercase && confirmNumber && confirmCharacter) {
    choices = character.concat(alphaUpper, number);
  }

  // Else if for 2 positive options
  else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha);
  } else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);
  } else if (confirmLowercase && confirmCharacter) {
    choices = character.concat(alpha);
  } else if (confirmUppercase && confirmNumber) {
    choices = number.concat(alphaUpper);
  } else if (confirmUppercase && confirmCharacter) {
    choices = character.concat(alphaUpper);
  } else if (confirmNumber && confirmCharacter) {
    choices = character.concat(number);
  }

  // Else if for 1 positive option
  else if (confirmLowercase) {
    choices = alpha;
  } else if (confirmUppercase) {
    choices = alphaUpper;
  } else if (confirmNumber) {
    choices = number;
  } else if (confirmCharacter) {
    choices = character;
  }

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Start random selection variables:
  // Random selection for all variables:
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  var ps = password.join("");
  UserInput(ps);
  return ps;
}

// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}
