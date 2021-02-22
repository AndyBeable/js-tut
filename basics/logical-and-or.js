// Logical And Operator - True is both sides are true. False otherwise.
// Logical Or Operator - True if at least one side is true. False otherwise

let temp = 55; // adjust to see it working.

if (temp >= 60 && temp <= 90) {
  console.log('It is nice outside');
} else if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside');
} else {
  console.log('Do what you want');
}

// CHALLENGE
//

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Here are selection of tasty Vegan dishes');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Here are a selection of Vegan and Non-Vegan options');
} else {
  console.log('Here is our full menu');
}
