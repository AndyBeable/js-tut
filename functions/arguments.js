// Multiple arguments

// let add = function (a, b, c) {
//   return a + b + c;
// };

// let result = add(10, 5, 7);
// console.log(result);

// Default arguments
let getScoreText = function (name = 'Anon', score = 0) {
  // default values
  return 'Name: ' + name + ' Score ' + score;
};

let scoreText = getScoreText();
console.log(scoreText);
