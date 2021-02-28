const todos = [
  {
    text: 'Walk the dog',
    completed: true,
  },
  {
    text: 'Go to the gym',
    completed: true,
  },
  {
    text: 'Build portfolio',
    completed: false,
  },
  {
    text: 'Book flights',
    completed: false,
  },
  {
    text: 'Go shopping',
    completed: false,
  },
];

// const status = `You have ${todos.length} things to do today`;
// console.log(status);
// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);

//delete third item
// console.log(todos.splice(2, 1));
// console.log(todos);

// add new item to end of array
// todos.push('Wash the car');
// console.log(todos);

// remove the 1st item from array.
// console.log(todos);

// Print 1. Item 1
//
// const status = `You have ${todos.length} things to do today`;
// console.log(status);
// todos.forEach(function (todo, i) {
//   const num = i + 1;
//   console.log(`${num}. ${todo}`);
// });

// FOR LOOP

// for (let todo = 0; todo < todos.length; todo++) {
//   const num = todo + 1;
//   console.log(`${num}. ${todos[todo]}`);
// }

//CHALLENGE
//1. Convert array of strings to array of objs. Each will have two propertys. (text, completed)
//2. Create function to remove a todo by text value;

// const deleteTodo = function (todos, todoText) {
//   const index = todos.findIndex(function (todo) {
//     return todo.text.toLowerCase() === todoText.toLowerCase();
//   });
//   if (index > -1) {
//     todos.splice(index, 1);
//   }
// };

// deleteTodo(todos, 'Go to the gym');
// console.log(todos);

// const getThingsTodoDo = function (todos) {
//   return todos.filter(function (todo) {
//     return !todo.completed;
//   });
// };

// console.log(getThingsTodoDo(todos));

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);
