const form = document.querySelector('#new-item-form');
const list = document.querySelector('#list');
const input = document.querySelector('#item-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //create new item
  const item = document.createElement('div');
  item.innerText = input.value;
  item.classList.add('list-item');
  //add item to list
  list.appendChild(item);
  // clear input
  input.value = '';

  //remove item from list when clicked
  item.addEventListener('click', () => {
    list.remove();
  });
});
