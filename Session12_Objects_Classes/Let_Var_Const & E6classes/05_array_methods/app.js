let numbers = [12, 5, 22, 1, 3, 12, 22, 44, 99];
let fruits = ['Apples', 'Banana', 'Orange', 'Pear'];

// sort method

// let sortedFruits = fruits.sort();
// console.log(sortedFruits);

// let sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

// // compare function parameter for numeric sort
// numericSort = function(a,b){
//     return a - b;
// }
// sortedNumbers = numbers.sort(numericSort);
// // OR
// sortedNumber = numbers.sort(((a,b) => {return a-b;}));
// // OR LET'S CHECK DESCENDING SORT
// sortedNumber = numbers.sort(((a,b) => b-a));
// console.log(sortedNumbers);

// find method --> find the first number that match a pattern
// let under10 = (x) => x<10;
// let firstNumbersUnder10 = numbers.find(under10);
// console.log(firstNumbersUnder10);

// let over10 = (x) => x>10;
// let firstNumberOver10 = numbers.find(over10);
// console.log(firstNumberOver10);


// filter
// let canDrive = [];
// let ages = [12, 5, 22, 1, 3, 12, 22, 44, 99, 17, 18];
// canDrive = ages.filter((age) => age<=18);
// console.log("canDrive: ", canDrive);

// FOR EACH Array method
// let cars = ['Dacia', 'VW', 'SKODA', 'BWM'];
// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// callback function - anonymus function
// cars.forEach((car) => console.log(car));
// cars.forEach((car,index) => console.log(car,index));


// MAP Function - return a different array based
// array of user objects
// const users = [
//     {id:1, name:'Dan'},
//     {id:22, name:'Nicu'},
//     {id:14, name:'Costel'},
//     {id:5, name:'Petrica'}
// ];

// const ids = users.map((user) => user.id);
// console.log(ids);

// const names = users.map((user) => user.name);
// console.log(names);

// const numbersX2 = numbers.map(number => number*2);
// console.log(numbersX2);

// reduce
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }
// console.log(sum);

// const sumWithReduce = numbers.reduce((number, sum) => sum + number);
// console.log(sumWithReduce);