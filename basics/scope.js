// JS uses lexical scope (static scope).

// Scope tree

//Global Scope (varOne)
// - Local Scope (varTwo)
// -- Local Scope (varFour)
// - Local Scope (varThree)

// let varOne = 'varOne'; // globally scoped

// if (true) {
//   console.log(varOne);
//   let varTwo = 'varTwo'; // locally scoped, local variable
//   console.log(varTwo);

//   if (true) {
//     let varFour = 'varFour';
//   }
// }

// if (true) {
//   let varThree = 'varThree';
// }

// console.log(varTwo); // prints not defined - (local scoped )block scoped

//Global
//Local
// Local
//Local

// let name = 'Andy';

if (true) {
  // let name = 'Iris';
  if (true) {
    let name = 'Steve';
    console.log(name); // variable shadowing. Variable in local scope shares variable name with globally scoped variable
  }
}

if (true) {
  console.log(name);
}
