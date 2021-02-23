let myBook = {
  title: 'Moby Dick',
  author: 'Herman Merville',
  pageCount: 752,
};

console.log(myBook.author); // dot notation to pull properties
console.log(`${myBook.title} by ${myBook.author}`); // template strings

// Changing properties

myBook.title = 'Another Book';
console.log(`${myBook.title} by ${myBook.author}`);

// Challenge

let person = {
  name: 'Andy',
  age: 32,
  location: 'London',
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
//Increase age
person.age = person.age + 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
