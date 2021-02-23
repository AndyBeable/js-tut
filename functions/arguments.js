// Multiple arguments

let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 5, 7);
console.log(result);

// Default arguments
let getScoreText = function (name = 'Anon', score = 0) {
  // default values
  return `Name ${name} - Score ${score}`;
  // return 'Name: ' + name + ' - Score ' + score;
};

let scoreText = getScoreText(undefined, 50);
console.log(scoreText);

// CHALLENGE

let getTip = function (total, tipPercent = 0.5) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent}% tip on $${total} would be ${tip}`;
};

let tip = getTip(100);
console.log(tip);

let name = 'Matt';
console.log(`Hi ${name}`);
