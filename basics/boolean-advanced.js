let isAccountLocked = false;
let userRole = 'admin';

if (isAccountLocked) {
  console.log("You're account is locked");
} else {
  console.log('Welcome');
}

// ElSE IF

if (isAccountLocked) {
  console.log("You're account is locked");
} else if (userRole === 'admin') {
  console.log('Welcome Admin');
} else {
  console.log('Welcome');
}

// CHALLENGE

let temp = 45;
// let isFreezing = temp <= 32;

if (temp <= 32) {
  console.log('It is freezing outside!');
} else if (temp >= 110) {
  console.log('Lets get to the beach!');
} else {
  console.log('Go for it. It`s pretty nice');
}
