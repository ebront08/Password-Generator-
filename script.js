// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

window.addEventListener('load', function () {
  var plength = prompt(
    'How many characters would you like your password to be?'
  );

  while (plength < 8 || plength > 128) {
    plength = prompt(
      'Length must be 8-128 characters. How many characters would you like your password to be?'
    );
  }

  var cuppercase = confirm('Would you like to use uppercase letters?');
  var clowercase = confirm('Would you like to use lowercase letters?');
  var cnumbers = confirm('would you like to use numbers?');
  var csymbols = confirm('would you like to use special characters?');

  while (!(cuppercase || clowercase || cnumbers || csymbols)) {
    alert('You must select at least one character type!');

    cuppercase = confirm('Would you like to use uppercase letters?');
    clowercase = confirm('Would you like to use lowercase letters?');
    cnumbers = confirm('would you like to use numbers?');
    csymbols = confirm('would you like to use special characters?');
  }

  //DOM elements
  const resultEl = document.getElementById('password');

  document.getElementById('generate').addEventListener('click', () => {
    /*   resultEl.value = generatePassword(
      clowercase,
      cuppercase,
      cnumbers,
      csymbols,
      plength
    ); */
    resultEl.value = "generatePassword"
  });

  document.getElementById('generate').addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.value;

    if (!password) {
      return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select(rando);
    document.execCommand('copy');
    textarea.remove(rando);
    alert('Password copied to clipboard');
  });
});

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function generatePassword(lower, upper, number, symbol, length) {
  
  const typesCount = lower + upper + number + symbol;
  console.log(typesCount)
  const typesArr = [
    {
      lower,
    },
    {
      upper,
    },
    {
      number,
    },
    {
      symbol,
    },
  ].filter((item) => Object.values(item)[0]);

  // create a loop
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      //console.log(typesArr)
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

function rando(characters) {
  console.log(characters)
  console.log('characters')

}

//let rando = ('qwertyuiopasdfghjklzxcvbnm')
// Generator functions
function getRandomLower() {
   rando('qwertyuiopasdfghjklzxcvbnm');
}

function getRandomUpper() {
   rando('QWERTYUIOPASDFGHJKLZXCVBNM');
}

function getRandomNumber() {
   rando(9);
}

function getRandomSymbol() {
   rando('!@#$%^&*(){}[]=<>/,.');
}
