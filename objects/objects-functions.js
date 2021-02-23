let myBook = {
  title: 'Moby Dick',
  author: 'Herman Merville',
  pageCount: 752,
};

let otherBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326,
};

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

//CHALLENGE
// Create fn that takes fahrenheit in, return obj with fahrenheit, celsius, and kelvin value.

let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celsius: (fahrenheit - 32) * (5 / 9),
  };
};

let temperatures = convertFahrenheit(74);
console.log(temperatures);
