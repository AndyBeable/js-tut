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
    completed: true,
  },
  {
    text: 'Book flights',
    completed: true,
  },
  {
    text: 'Go shopping',
    completed: false,
  },
];

// print summary message. you have 3 todos left for eg

const getThingsTodoDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed;
  });
};

const incomplete = getThingsTodoDo(todos);

const status = document.createElement('h3');
status.textContent = `You have ${incomplete.length} things to do today`;
document.querySelector('body').appendChild(status);

// print paragraph for each todo above. Use text value for the visible content of the p tags.
