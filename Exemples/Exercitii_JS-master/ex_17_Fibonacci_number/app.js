document.getElementById("button").addEventListener("click", fibonacciNumber);

function fibonacciNumber(){
    var N = parseInt(document.getElementById("number").value);
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;

    for(var i = 2; i <= N; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.getElementById("result").innerHTML = "Fibonacci series is: " + fib;  //le afiseaza pe toate
    document.getElementById("result2").innerHTML = "F(" + N + ") = " + fib[N]; //afiseaza doar ultimul numar din serie
}

//or
var fib = function (N) 
{
    if (N === 1){
        return [0, 1];
    } 
    else{
        var s = fib(N - 1);
        s.push(s[s.length - 1] + s[s.length - 2]); //adds new item in the array
        return s; //afiseaza toate numerele
    }
};

//  console.log(fib(8));