const notes = [
  {
    title: 'My next trip',
    body: 'I would like to go to Spain',
  },
  {
    title: 'Habits to work on',
    body: 'Exercise. Eating better',
  },
  {
    title: 'Office Modifications',
    body: 'Get a new chair',
  },
];

const ps = document.querySelectorAll('p');
ps.forEach(function (p) {
  p.textContent = 'Thing 1';
});

// Add a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'You are a cunt';
document.querySelector('body').appendChild(newParagraph);
