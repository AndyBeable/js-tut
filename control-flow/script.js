// IF / ELSE IF

// const userIsLoggedIn = false;

// if (userIsLoggedIn) {
//   console.log('User logged in');
// } else {
//   console.log('Please login');
// }

// const totalPrice = 15;

// if (totalPrice == null) {
//   console.log('there is no total price');
// } else if (totalPrice < 10) {
//   console.log('This is cheap');
// } else if (totalPrice < 50) {
//   console.log('This is good value');
// } else {
//   console.log('this is expensive');
// }

// const sports = [
//   'Football',
//   'Golf',
//   'Tennis',
//   'Motorsports',
//   'Hockey',
//   'Boxing',
//   'F1',
// ];

// if (sports.length === 0) {
//   console.log('empty');
// } else if (sports.length < 5) {
//   console.log('small');
// } else if (sports.length < 10) {
//   console.log('medium');
// } else {
//   console.log('Large');
// }

// SINGLE LINE IF STATEMENTS
// const isUserLoggedIn = false;
// if (isUserLoggedIn) console.log('User is logged in');

// TERNARY OPERATORS

// isUserLoggedIn
//   ? console.log('user is logged in')
//   : console.log('please log in');

// let welcomeMessage = '';

// if (isUserLoggedIn) {
//   welcomeMessage = 'Welcome';
// } else {
//   welcomeMessage = 'Please log in';
// }

// const welcomeMessage = isUserLoggedIn ? 'Welcome' : 'Please log in';

// console.log(welcomeMessage);

// SWITCH STATEMENTS

const favouriteAnimal = 'cat';

// if (favouriteAnimal === 'cat') {
//   console.log('cats are cool');
// } else if (favouriteAnimal === 'dog') {
//   console.log('Dogs are cool too');
// } else if (favouriteAnimal === 'shark') {
//   console.log('Strange choice');
// } else {
//   console.log('Dont know that animal');
// }

// refactored in switch statement

// switch (favouriteAnimal) {
//   case 'kitten':
//   case 'cat':
//     console.log('Cats are cool');
//     break;
//   case 'dog':
//     console.log('Dogs are also cool');
//     break;
//   case 'shark':
//     console.log('Strange choice');
//     break;
//   default:
//     console.log('Dont know that animal');
// }

// const number = 1;

// switch (number) {
//   case 0:
//     console.log('It is zero');
//     break;
//   case 1:
//   case 2:
//     console.log('It is small');
//     break;
//   case 3:
//   case 4:
//     console.log('It is medium');
//     break;
//   case 5:
//     console.log('It is large');
//     break;
//   default:
//     console.log('Try again');
// }

// FOR LOOP

// for (let i = 0; i < 5; i++) {
//   if (i > 2) break; // continue
//   console.log('Hi');
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) break;
//   console.log(i);
// }

// WHILE LOOP
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// const person = {
//   name: 'Andy',
//   friend: {
//     name: 'Iris',
//     friend: {
//       name: 'Jordi',
//     },
//   },
// };

// let currentPerson = person;
// while (currentPerson != null) {
//   console.log(currentPerson.name);
//   currentPerson = currentPerson.friend;
// }

// RECURSION

// function printNumber(number) {
//   if (number > 10) return;
//   console.log(number);
//   printNumber(number + 1);
// }

// printNumber(1);

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }

// console.log(sum);

// function sumNumbersBelow(number) {
//   if (number <= 0) return 0;
//   return number + sumNumbersBelow(number - 1);
// }

// console.log(sumNumbersBelow(2));

// const person = {
//   name: 'Andy',
//   friend: {
//     name: 'Iris',
//     friend: {
//       name: 'Jordi',
//     },
//   },
// };

// let currentPerson = person;
// // while (currentPerson != null) {
// //   console.log(currentPerson.name);
// //   currentPerson = currentPerson.friend;
// // }

// function printNames(currentPerson) {
//   if (currentPerson == null) return;

//   console.log(currentPerson.name);
//   printNames(currentPerson.friend);
// }
// printNames(person);

// SHORT CIRCUIT EVAL
function printName(name) {
  name = name || 'Default';
  console.log(name);
}

printName('Andy'); // remove argument to see Default run.

const person = {
  name: 'Andy',
  address: {
    street: 'Main street',
  },
};

console.log(person && person.address && person.address.street);
