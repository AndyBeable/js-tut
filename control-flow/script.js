const userIsLoggedIn = false;

if (userIsLoggedIn) {
  console.log('User logged in');
} else {
  console.log('Please login');
}

const totalPrice = 15;

if (totalPrice == null) {
  console.log('there is no total price');
} else if (totalPrice < 10) {
  console.log('This is cheap');
} else if (totalPrice < 50) {
  console.log('This is good value');
} else {
  console.log('this is expensive');
}

const sports = [
  'Football',
  'Golf',
  'Tennis',
  'Motorsports',
  'Hockey',
  'Boxing',
  'F1',
];

if (sports.length === 0) {
  console.log('empty');
} else if (sports.length < 5) {
  console.log('small');
} else if (sports.length < 10) {
  console.log('medium');
} else {
  console.log('Large');
}
