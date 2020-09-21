// function sayHello(name){
//     if (name){
//         console.log("Hello " + name + "!" );
//     }
//     else{
//         console.log("Hey there!");
//     }
// }

// sayHello();
// // sayHello('Vasilica');

// function sayHello(firstName, lastName){
//     if (firstName && lastName){
//         console.log("Hello " + firstName + " " + lastName + "!" );
//     }
//     else{
//         console.log("Hey there!");
//     }
// }

// var firstName = 'Vasilica';
// var lastName = 'Dorin';
// sayHello(firstName, lastName);

// function sum(a, b){
//     console.log('sum', a + b);
//     // a = 0;
//     // console.log(a);
//      return a + b;
// }

// var a = 2, b = 3;
// sum(a , b);
// var n = sum(2, 8) + 12 + sum(22, 5);
// console.log(n);

// console.log(a);

function sum(numbers){
    console.log('sum', numbers.a + numbers.b);
    numbers.a = 0;
    console.log(0);
}

var numbers = {
    a: 3,
    b: 2
}

sum(numbers);
console.log(numbers.a);

// recursive function
// function factorial(n) {
//     if ((n === 0) || (n === 1)) { return 1; }
//     else { return (n * factorial(n - 1)); }
// }
// // fact(6) = 6 * fact(5);
// fact(6) = 6 * 5 * fact(4);
// fact(6) =  6 * 5 * 4 * fact(3);
// fact(6) =  6 * 5 * 4 * 3 * fact(2);
// fact(6) =  6 * 5 * 4 * 3 * 2 * fact(1);

// var c = 10;

// function prod(){
//     console.log(c);
//     var a = 10;
//     var b = 20;
//     return a * b;
// }

// prod();

// // console.log(a);

// 2 3 4 5 3

// 3 -> 2 3 4 5
// 5 -> 2 3 4
// 4 -> 2 3
// 3 -> 2
// 2 -> 0


// 23453 % 10 = 3
// 2345 = 23453 / 10;