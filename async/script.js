function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}

// setTimeoutPromise(250)
//   .then(() => {
//     console.log('1');
//     return setTimeoutPromise(350);
//   })
//   .then(() => {
//     console.log('2');
//   });

// refactoring using async

async function doStuff() {
  await setTimeoutPromise(250);
  console.log('1');
  await setTimeoutPromise(250);
  console.log('2');
}

doStuff();
