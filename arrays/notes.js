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

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};
// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

const note = findNote(notes, 'Office modifications');
console.log(note);

// console.log(notes.length);
// console.log(notes[1]);
// console.log(notes[notes.length - 1]);

//ADDING ITEMS TO ARRAY
// notes.push('Note 4');
// console.log(notes);
// //REMOVE ITEMS FROM ARRAY
// console.log(notes.pop()); // returns deleted item
// console.log(notes);

// //REMOVING FIRST ITEM IN ARRAY
// console.log(notes.shift());
// console.log(notes);

// //ADDING ITEM TO BEGINNING
// notes.unshift('My first note');
// console.log(notes);

// SPLICE
// notes.splice(1, 1); // start at index of 1 and remove 1 item. second arg dictates how many items to remove
// console.log(notes);

// notes.splice(1, 0, 'This is a new second item');
// console.log(notes);

// FOR EACH
// notes.forEach(function (item, i) {
//   console.log(item, i);
// });

// // FOR LOOP
// for (let count = 0; count <= 2; count++) {
//   console.log(count);
// }

// for (let count = 0; count < notes.length; count++) {
//   console.log(notes[count]);
// }

// console.log(notes.indexOf('note 2'));

// const index = notes.findIndex(function (note, index) {
//   console.log(note);
//   return note.title === 'Habits to work on';
// });

// console.log(index);
