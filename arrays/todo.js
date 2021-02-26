const todos = [
  'Walk the dog',
  'Go the the gym',
  'Build portfolio',
  'Book flights',
  'Go shopping',
];

// const status = `You have ${todos.length} things to do today`;
// console.log(status);
// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);

//delete third item
// console.log(todos.splice(2, 1));
// console.log(todos);

// add new item to end of array
todos.push('Wash the car');
// console.log(todos);

// remove the 1st item from array.
// console.log(todos);

// Print 1. Item 1
// 2. Item 2
const status = `You have ${todos.length} things to do today`;
console.log(status);
todos.forEach(function (todo, i) {
  const num = i + 1;
  console.log(`${num}. ${todo}`);
});
