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

const filters = {
  searchText: '',
};

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';

  const summary = document.createElement('h3');
  summary.textContent = `You have ${incompleteTodos.length} things to do today`;
  document.querySelector('#todos').appendChild(summary);

  filteredTodos.forEach(function (todo) {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('#todos').appendChild(p);
  });
};

renderTodos(todos, filters);

// EVENT LISTENERS
document.querySelector('#add-todo').addEventListener('click', function (e) {
  console.log('Im trying to add a note');
});

document.querySelector('#new-todo').addEventListener('input', function (e) {
  console.log(e.target.value);
});

document.querySelector('#search-todo').addEventListener('input', function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});
