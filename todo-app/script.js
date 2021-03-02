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

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed;
});

const summary = document.createElement('h3');
summary.textContent = `You have ${incompleteTodos.length} things to do today`;
document.querySelector('body').appendChild(summary);

// print paragraph for each todo above. Use text value for the visible content of the p tags.

todos.forEach(function (todo) {
  const p = document.createElement('p');
  p.textContent = todo.text;
  document.querySelector('body').appendChild(p);
});
