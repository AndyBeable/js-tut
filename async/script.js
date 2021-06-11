function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
    reject('Error');
    // resolve(`You waited ${delay} milliseconds`);
  }, delay);
}

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

async function doStuff() {
  try {
    const message = await setTimeoutPromise(250);
    console.log(message);
    console.log('1');
    const message2 = await setTimeoutPromise(250);
    console.log(message2);
    console.log('2');
  } catch (error) {
    console.error(error);
  }
}

doStuff();
