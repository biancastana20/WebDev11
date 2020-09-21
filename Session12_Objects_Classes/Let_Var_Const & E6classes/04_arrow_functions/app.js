// FUNCTION DECLARATIONS NO DEFAULT PARAM ES5

// function greet(firstName, lastName){
//     if(typeof firstName === 'undefined'){firstName = 'Popescu'}
//     if(typeof lastName === 'undefined'){lastName = 'Ion'}
//     return 'Hello ' + firstName + ' ' + lastName;
//   }
  
//   console.log(greet());

// FUNCTION DECLARATIONS DEFAULT PARAM ES6

// function greet(firstName = 'Popescu', lastName = 'Ion'){
//     return 'Hello ' + firstName + ' ' + lastName;
//   }
  
// console.log(greet('Vasilescu', 'Daniel'));
// console.log(greet());

// FUNCTION EXPRESIONS
// FUNCTION AS A VARIABLE ASSINGMENT
// const square = function(x = 5){
//     return x*x;
// };//semicolon here - is a variable

// console.log(square());
// console.log(square(7));

// ARROW FUNCTIONS - SHORTER CODE
// const sum = function(x,y){
//     return x + y;
// }

// const sum = (x,y) => {return x + y;}
// only a return statement no brakets
const sum = (x,y) =>  x + y;
console.log(sum(2,3));

// const square = (x) => {return x*x};
// const square = (x) =>  x*x;
const square = x =>  x*x;

console.log(square(7));
