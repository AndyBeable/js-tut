// function sum(a, b) {
//   return a + b;
// }

// let total = sum(4, 6);
// console.log(total);

// function printName(name) {
//   console.log(name);
// }

// printName('Iris');

// function sayName(name) {
//   return 'Hello' + ' ' + name;
// }

// let greet = sayName('Andy');
// console.log(greet);

// function printVariable2(variable) {
//   console.log(variable);
// }

// function func(x) {
//   x('hello World');
// }

// func(printVariable2);

// function sumCallback(a, b, callback) {
//   callback(a + b);
// }

// function handleSum(sum) {
//   console.log(sum);
// }

// sumCallback(1, 2, handleSum);

// function sayHello(name, callback) {
//   callback('Hello ' + name);
// }

// function printVariable(variable) {
//   console.log(variable);
// }

// sayHello('Andy', printVariable);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2));

// let sumArrow = (a, b) => {
//   return a + b;
// };

// console.log(sumArrow(5, 10));

// let sum2 = (a, b) => a + b;

// console.log(sum2(2, 5));

// let printName = (name) => {
//   console.log(name);
// };

// printName('Andy');

// function printHi(name) {
//   return 'Hi ' + name;
// }

// let printHi = (name) => 'Hi ' + name;
// console.log(printHi('Andy'));

// function func(x, callback) {
//   callback(x);
// }

// func(10, (variable) => {
//   console.log(variable);
// });

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 2));

// ARRAYS

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

const letters = ['a', 'b', 'c', 'd', 'e'];
console.log(letters[2]);

const a = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.log(a[0][3]);
console.log(a[1][2]);
console.log(a[2][0]);

console.log(numbers.length);
