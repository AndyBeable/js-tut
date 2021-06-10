// const promise = new Promise((resolve, reject) => {
//   const sum = 1 + 3;
//   if (sum === 2) {
//     resolve('Success');
//   } else {
//     reject('Error');
//   }
// });

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.error(message);
//   });

// setTimeout(() => {
//   console.log('Here');
// }, 250);

// setTimeoutPromise(250)
//   .then(() => {
//     console.log('1');
//     return setTimeoutPromise(250);
//   })
//   .then(() => {
//     console.log('2');
//   })
//   .then(() => {
//     console.log('3');
//   });

// function setTimeoutPromise(duration) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, duration);
//   });
// }

// Challenge

//Create a promise version of addEventListner

// const button = document.querySelector('button');

// function addEventListenerPromise(element, method) {
//   return new Promise((resolve, reject) => {
//     element.addEventListener(method, resolve);
//   });
// }

// addEventListenerPromise(button, 'click').then((e) => {
//   console.log('click');
//   console.log(e);
// });

Promise.all([Promise.resolve('1'), Promise.resolve('2'), Promise.resolve('3')])
  .then((messages) => {
    console.log(messages);
  })
  .catch((error) => {
    console.error(error);
  });
