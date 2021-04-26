// ID/CLASS SELECTORS

// const divWithId = document.getElementById('div-id');

// divWithId.style.color = 'Red';

// const divWithClass = document.getElementsByClassName('div-class');
// console.log(divWithClass);

// const divWithClassArray = Array.from(divWithClass);

// divWithClassArray.forEach((div) => (div.style.color = 'green'));

// QUERY SELECTORS

// const dataAttributeEl = document.querySelector('[data-test]');

// const divsWithClasses = document.querySelectorAll('.div-class');

// const input = document.querySelector('input');
// console.log(input);

// divsWithClasses.forEach((div) => (div.style.color = 'green'));

// console.log(divsWithClasses);

// EVENT LISTENERS

// const button = document.querySelector('[data-btn]');

// function greeting() {
//   console.log('Clicked');
// }

// button.addEventListener('click', greeting);

// button.removeEventListener('click', greeting);

// const button = document.querySelector('[data-btn]');
// const input = document.querySelector('[data-input-text]');
// const form = document.querySelector('[data-form]');
// const anchor = document.querySelector('[anchor-btn]');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('submitted form');
// });

// anchor.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('Clicked');
// });

// ARROW FUNCS CONTINUED
const button = document.querySelector('button');

button.addEventListener('click', (e) => {
  console.log('Arrow this');
  console.log(this);
});

button.addEventListener('click', function (e) {
  console.log('function this');
  console.log(this);
});
