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

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);

// const letters = ['a', 'b', 'c', 'd', 'e'];
// console.log(letters[2]);

// const a = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];

// console.log(a[0][3]);
// console.log(a[1][2]);
// console.log(a[2][0]);

// console.log(numbers.length);

// OBJECTS

// let name = 'Andy';
// const age = 32;
// const favouriteNumber = 7;

// let person = {
//   name: 'Andy',
//   age: 32,
//   favouriteNumber: 7,
//   sayHi: function () {
//     console.log('Hi');
//   },
//   sayHi2() {
//     console.log('Hi2');
//   },
//   address: {
//     street: 'Queenstown Road',
//     city: 'London',
//   },
//   hobbies: ['Cycling', 'Golf'],
// };

// console.log(person.address.street);
// console.log(person.hobbies[1]);

// person.sayHi2();

// const car = {
//   make: 'Ferrari',
//   model: 'LaFerrari',
//   isUsed: false,
//   makeNoise() {
//     console.log('Vrooom');
//   },
// };

// car.makeNoise();
// console.log(car.make, car.model, car.isUsed);

// const book = {
//   title: '1984',
//   author: {
//     name: 'George Orwell',
//     age: 57,
//   },
// };

// console.log(book.title, book.author.name, book.author.age);

// book.title = 'New Title';
// console.log(book.title);

// // REFERNCE VS VALUE

// let a = 10;
// let b = 'Hi';
// let c = [1, 3];
// let d = c;
// d.push(3);

// console.log('a = ' + a);
// console.log('b = ' + b);
// console.log('c = ' + c);
// console.log('d = ' + d);

// ARRAYS

// const a = [1, 2, 3, 4, 5];
// const b = [2, 4, 6, 8, 10];
// const c = [3, 4, 5, 6, 7];

// a.forEach((number) => {
//   console.log(number);
// });

// const newA = a.map((number) => {
//   return number * 2;
// });

// const newB = b.filter((number) => {
//   return number <= 8;
// });

// const newC = c.find((number) => {
//   return number > 4;
// });

// const isTrue = a.some((number) => {
//   return number > 6;
// });
// const isTrue2 = a.every((number) => {
//   return number < 6;
// });

// const sum = a.reduce((sum, number) => {
//   return sum + number;
// }, 0);

// console.log(sum);

// const items = [
//   { price: 10 },
//   { price: 20 },
//   { price: 14 },
//   { price: 1 },
//   { price: 6 },
// ];

// const total = items.reduce((sum, item) => {
//   return sum + item.price;
// }, 0);

// console.log(total);

// const d = [1, 2, 3, 4, 5];

// const isTrue = d.includes(6);
// console.log(isTrue);

// STRING TEMPLATE LITERALS

let a = 'Hello';
let b = 'World';
console.log(`${a} ${b}`);

let firstName = 'Andy';
let lastName = 'Beable';

console.log(`${firstName} ${lastName}`);
