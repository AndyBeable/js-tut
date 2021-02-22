// let greetUser = function () {
//   console.log('Welcome User');
// };

// greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(4);
console.log(value);

//CHALLENGE
//create fn that converts fahrenheit to celsius.

let tempConvert = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

let celsius = tempConvert(68);
console.log(celsius);
