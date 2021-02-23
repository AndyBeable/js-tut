// Global scope = (tempConvert, tempOne, tempTwo)
// - Local scope  = fahreneheit, celsius. Arguments of a fn are locally scoped
// - - Local scope (isFreezing)

let tempConvert = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;

  if (celsius <= 0) {
    let isFreezing = true;
  }

  return celsius;
};

let tempOne = tempConvert(32);
let tempTwo = tempConvert(68);
console.log(celsius);
