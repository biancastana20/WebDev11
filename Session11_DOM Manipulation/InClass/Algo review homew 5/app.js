// 1. Using control structures, do the following:
// a. display in the console the numbers from 1 to 20
// b. display in the console the odd numbers from 1 to 20

function show1to20a(){
    var result = "";
    for(var i = 0; i <= 20; i++){
        result += i + " ";
    }
    console.log(result);
}

// show1to20a();

function show1to20b(){
    var result = "";
    for(var i = 0; i <= 20; i++){
        if(i % 2 == 1){ 
            result += i + " ";
        }
    }
    console.log(result);
}

// show1to20b();

// For var list = [2, 3, 5, 7, 5, 3];
// a. compute the sum of the elements of an array and display it in the console
// b. compute the maximum of the elements of an array and display it in the console


// function sumA(arr)
// {
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     console.log(sum);
// }

// var list = [2, 3, 5, 7, 5, 3];
// sumA([2, 3, 5, 7, 5, 3, 5]);

// function maxArr(arr)
// {
//     var max = arr[0];
//     for(var i = 1; i < arr.length; i++){
//         if(max < arr[i]){
//             max = arr[i];
//         }
//     }
//     console.log(max);
// }
// maxArr([2, 3, 5, 7, 5, 3, 5]);

function swap (a, b){
    var tmp;

    tmp = a;
    a = b;
    b = tmp;

    console.log("a = " + a);
    console.log("b = " + b);
}
swap("3" , "4");

function countElem(arr, num){
    var count = 0;
    for(var i=0; i < arr.length; i++){
        if (arr[i] == num){
            count++;
        }
    }
    console.log(count);
}

// countElem([12, 2, 3, 4, 3, 3], 3);

// var list = [1, 44, 43, 34, 43, 43, 0];
// countElem(list, 12);


function fibo(n){
    var fiboArr = [];
    fiboArr[0] = 0;
    fiboArr[1] = 1;
    console.log("fibo["+ 0 +"]=" + fiboArr[0]);
    console.log("fibo["+ 1 +"]=" + fiboArr[1]);

    for( var i = 2; i <= n; i++){
        fiboArr[i] = fiboArr[i-1] + fiboArr[i-2];
        console.log("fibo["+ i +"]=" + fiboArr[i]);
    }
}
fibo(50);