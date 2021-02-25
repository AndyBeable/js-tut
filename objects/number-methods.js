let num = 103.941;

//States how many DP you want to return
// console.log(num.toFixed(4));

// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(randomNum);

// CHALLENGE
//Create fn that takes in a guess. Then generate a random number and see if the guess was correct

let makeGuess = function (guess) {
  let min = 1;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);

  return guess === randomNum;
};

console.log(makeGuess(2));
