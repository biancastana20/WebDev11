document.querySelector("#button").addEventListener("click", fizzBuzz);

function fizzBuzz(){
    var n = Number(document.getElementById("number").value);
    var arr = [];

    for(var i = 1; i <= n; i++){
        if(i % 15 === 0){
            arr += "FizzBuzz" + " ";
            // arr += "\"" + "FizzBuzz" + "\"" + "," + "</br>";
        }
        else if(i % 3 === 0){
            arr += "Fizz" + " ";
            // arr += "\"" + "Fizz" + "\"" + "," + "</br>";
        }
        else if(i % 5 === 0){
            arr += "Buzz" + " ";
            // arr += "\"" + "Buzz" + "\"" + "," + "</br>";
        }
        else{
            arr += i + " ";
            // arr += "\"" + i  + "\"" + "," + "</br>";
        }
    }
   
    document.getElementById("result").innerHTML = arr;
}


//or

var fizzBuzz2 = function(n) {
    var arr = [];
    for(var i = 1; arr.length < n; i++){
        if(i % 15 === 0){
            arr.push("\"" + "FizzBuzz" + "\""); //add new item to array
        }
        else if(i % 3 === 0){
            arr.push("\"" + "Fizz" + "\"");
        } 
        else if(i % 5 === 0){
            arr.push("\"" + "Buzz" + "\"");
        } 
        else{
            arr.push("\"" + i + "\"");
        }
    }
    return arr;
};
  

//or     se afiseaza intr-un array!!!!!!!!!
var fizzBuzz3 = function(n) {
    var results = [];
    if (n === 1) {
        return ['1']; // !
    } else {
        if (n % 3 === 0 && n % 5 === 0) {
        results.push('FizzBuzz');
        } else if (n % 5 === 0) {
        results.push('Buzz');
        } else if (n % 3 === 0) {
        results.push('Fizz');
        } else {
        results.push(''+ n);
        }
        return fizzBuzz3(n - 1).concat(results);
    }
};
console.log(fizzBuzz3(15));

// document.querySelector("#button2").addEventListener("click", fizzBuzz4);

// function fizzBuzz4() {
//     var n = document.getElementById("number2").value;
//     console.log(n);
//     var results = [];
//     if (n === 1) {
//         results = ['1']; // !
//     } else {
//         if (n % 3 === 0 && n % 5 === 0) {
//         results.push('FizzBuzz');
//         } else if (n % 5 === 0) {
//         results.push('Buzz');
//         } else if (n % 3 === 0) {
//         results.push('Fizz');
//         } else {
//         results.push(''+ n);
//         }
        
//         // return fizzBuzz4(n - 1).concat(results);
//         var x = fizzBuzz4(n - 1).concat(results);
//         console.log(x);
//         document.getElementById("result2").innerHTML = x;
//     }
// };