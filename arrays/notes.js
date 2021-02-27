const notes = ['Notes 1', 'Note 2', 'Note 3'];

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
notes.splice(1, 1); // start at index of 1 and remove 1 item. second arg dictates how many items to remove
console.log(notes);

notes.splice(1, 0, 'This is a new second item');
console.log(notes);

// FOR EACH
notes.forEach(function (item, i) {
  console.log(item, i);
});
