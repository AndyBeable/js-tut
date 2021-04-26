const divWithId = document.getElementById('div-id');

divWithId.style.color = 'Red';

const divWithClass = document.getElementsByClassName('div-class');
console.log(divWithClass);

const divWithClassArray = Array.from(divWithClass);

divWithClassArray.forEach((div) => (div.style.color = 'green'));
