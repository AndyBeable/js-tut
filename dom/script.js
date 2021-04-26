// ID/CLASS SELECTORS

// const divWithId = document.getElementById('div-id');

// divWithId.style.color = 'Red';

// const divWithClass = document.getElementsByClassName('div-class');
// console.log(divWithClass);

// const divWithClassArray = Array.from(divWithClass);

// divWithClassArray.forEach((div) => (div.style.color = 'green'));

// QUERY SELECTORS

const dataAttributeEl = document.querySelector('[data-test]');

const divsWithClasses = document.querySelectorAll('.div-class');

const input = document.querySelector('input');
console.log(input);

divsWithClasses.forEach((div) => (div.style.color = 'green'));

console.log(divsWithClasses);
