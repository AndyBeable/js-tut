// function setTimeoutPromise(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, delay);
//     reject('Error');
//     // resolve(`You waited ${delay} milliseconds`);
//   }, delay);
// }

// setTimeoutPromise(250)
//   .then((message) => {
//     console.log(message);
//     console.log('1');
//     return setTimeoutPromise(350);
//   })
//   .then((message) => {
//     console.log(message);
//     console.log('2');
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// refactoring using async

// async function doStuff() {
//   try {
//     const message = await setTimeoutPromise(250);
//     console.log(message);
//     console.log('1');
//     const message2 = await setTimeoutPromise(250);
//     console.log(message2);
//     console.log('2');
//   } catch (error) {
//     console.error(error);
//   }
// }

// doStuff();

// CHALLENGE

function getValueWithDelay(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

function getValueWithDelayError(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error');
    }, delay);
  });
}

async function doStuff() {
  try {
    const value1 = await getValueWithDelay('Andy', 350);
    console.log(value1);
    const value2 = await getValueWithDelay('Beable', 350);
    console.log(value2);
    const value3 = await getValueWithDelayError('Error', 250);
    console.log(value3);
  } catch (error) {
    console.error(error);
  }
}

doStuff();
