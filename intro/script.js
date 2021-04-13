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

function sayHello(name, callback) {
  callback('Hello ' + name);
}

function printVariable(variable) {
  console.log(variable);
}

sayHello('Andy', printVariable);
