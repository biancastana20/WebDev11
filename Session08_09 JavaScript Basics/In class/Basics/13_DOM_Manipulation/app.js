// function countToN(n){
//     for(var i = 0; i <= n; i++){
//         console.log(i);
//     }   
// }

// // get value from input
// var input1 = document.getElementById('text1');
// var input1Value = input1.value;
// console.log(input1Value);
// // var input1Value = input1.
// countToN(input1Value);


function suma(){
    var n = Number (document.getElementById('text1').value);
    var m = Number (document.getElementById('text2').value);
    var out = document.getElementById("output1");
    sum = 0;
    // var result = "";
    // for(var i = 0; i <= n; i++){
        sum = m +n
        // result += i + " ";
        console.log(sum);
        // console.log(i);
    
    out.innerHTML = "Rezultatul este: " + sum;  
   
}
