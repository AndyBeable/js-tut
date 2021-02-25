let name = 'Andy Beable';
//length property
console.log(name.length);

//convert to Uppercase
console.log(name.toUpperCase());

//convert to Lowercase
console.log(name.toLowerCase());

//Includes method
let password = 'abc123password098';
console.log(password.includes('123'));

// Trim method
let animal = ' Tiger   ';
console.log(animal);
console.log(animal.trim());

// CHALLENGE
// create fn to validate password.
// only true if length is > 8 and it doesnt contain 'password'

let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password');
};

console.log(isValidPassword('asddspasswordfdsfsdd'));
