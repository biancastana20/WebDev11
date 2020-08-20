//Exercice 1
// 1. 1. Using control structures, do the following: a. display in the console the numbers from 1 to 20

  function countToN (){
    var i;
    var n = 20;
    var result = "";
    for(var i = 1; i <= n; i++){
        //  console.log(i);
        result += i + " "; 
      }  
    return result
}
var out= document.getElementById("ex1");
out.style.color = "blue";
out.innerHTML = "Numerele de la 1-20 sunt: " + countToN (20) + ".";


//Exercice 2
// b. display in the console the odd numbers from 1 to 20

 function printOddNr(n){
     var i;
    //  var n=20;
     var result="";
     for(var i = 1; i <= n; i++){
        if(i % 2 !== 0) 
        result += i + " ";      
   } 
    // console.log(result); 
   return result
}
var out= document.getElementById("ex2");
out.style.color = "blue";
out.innerHTML = "Numerele impare de la 1-20 sunt: " + printOddNr (20) + ".";

//Exercice 3
// 2.   For var list = [2, 3, 5, 7, 5, 3];
//   a. compute the sum of the elements of an array and display it in the console

 function sum (list) {
     var list=[2, 3, 5, 7, 5, 3];
     var i;
     var sum = 0;
     var x = list.length;
     for (i = 0; i < x; i++){
         sum += list[i];
     }
     return sum;
 }
var out= document.getElementById("ex3");
out.style.color = "green";
out.innerHTML="Suma este: " + sum (list) ;
 
// Exercice 4
//   b. compute the maximum of the elements of an array and display it in the console
    // exemplu1
 //  var list =[2, 3, 5, 7, 5, 3];
 //  list.sort(function(a,b) {
 //        return b-a})
 //  document.getElementById ('ex4').innerHTML= "Numarul maxim din array este: " + list[0]
 // sau
 //  document.getElementById ('ex4').innerHTML=Math.max(...list)

   // exemplul2
 var list =[2, 3, 5, 7, 5, 3];
 var i;
 var max = 0;
 for (i=0; i < list.length; i++){
    if (list[i] > max){
      max= list[i];
    }
 }
 //console.log (max)
 document.getElementById ('ex4').innerHTML="Numarul maxim din array este: " + max;


//Exercice 5
//   c. compute how many times a certain element appears in an array
var list =[2, 3, 5, 7, 5, 3];
 //  var b={};
 //  for(i = 0; i < list.length; i++) {
 //      if (b [list[i]]) {  //daca result de list[i] exista ii adauga 1 
 //         b [list[i]] += 1;
 //      } else {
 //         b [list[i]]=1; //daca nu exista e 1
 //      }
 //  }
 //   console.log(b)
var el = 3
count = 0;
for(i = 0; i < list.length; i++){
    if (el === list[i]) {
    count ++;
    }
}
 //console.log(count)
document.getElementById("ex5").innerHTML = "Elementul " + el + " apare de: " + count + " ori";

//Exercice 6
// 3.  Write a program to print Fibonacci series of the first 50 terms: 0 1 1 2 3 5 8 13 24 .....
function fibonnacci(n){
    var x = 0;
    var y = 1;
    var final=" 0 1 "
    for (i=0; i<n; i++) {
        result=x+y;
        x=y;
        y=result; 
        final+=result+ " "
    }
    return final;
}
// console.log(n2)
document.getElementById("ex6").innerHTML=fibonnacci(50);

//Exercice 7
//  4. Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

var output = document.getElementById('ex7');
for (i = 1; i <= 100; i++) {
    var el = ''
    if (i % 3 == 0 && i % 5 == 0) {
        el = "fizzbuzz";
    }
    else if (i % 3 == 0) {
        el = "fizz";
    }
    else if (i % 5 == 0) {
        el = "buzz";
    }
    else {
        el = i;
    }
    // console.log(el)
    // create a span for 1-100 el
    var toAdd = document.createElement('span')
    // add content to span (el)
    toAdd.innerHTML = " " +  el + " "
   // console.log(toAdd)
    // style span
    toAdd.style.color = getColor(el)
    // append span to div and display in my page  // <div><span>1</span> <span>2</span> <span>3</span> .....<span>100<span> </div>
     output.appendChild(toAdd)
}

function getColor(el) {
    var color = "black";
    switch (el) {
        case "fizzbuzz":
            color = "blue";
            break;
        case "fizz":
            color = "green";
            break;
        case "buzz":
            color = "orange";
            break;
    }
    return color;
 }

 
// i) Exercice 8
// **********
// **********
// **********
// **********

var str = "";
for( i = 1; i <= 4; i++) {
    for( j = 1; j<= 10; j++) {
        str += "*";
    }
    str += "<br>"
}
console.log(str)
document.getElementById("ex8").innerHTML= str 

//ii) Exercice 9
// *
// **
// ***
// ****
// *****
 
var str = "";
for( i = 1; i <= 5; i++) {
    for( j = 1; j<= i; j++) {
        str += "*";
    }
    str += "<br/>"
}
console.log(str)
document.getElementById("ex9").innerHTML= str


//iii) Exercice 10
var res = ''
for( i = 1; i <= 5 ; i++) {
    var str = "";
    for (j=5 ; j>=1 ; j--) {
        if (i>=j){
        str += "*";
    } else {
        str += "&ensp;";
    }
}
    console.log(str)
    res+=str +"<br>"
}
document.getElementById("ex10").innerHTML= res


//iv) Exercice 11 - piramid
var str = "";
for( i = 1; i <= 5 ; i++) {
    //add the white space to the left
    for (k=1 ; k<=(5-i) ; k++) {
        str += "&ensp;";
    }
    for( j = 0 ; j != (2*i -1) ; j++) {
        str += "*";
    }
    for (k=1 ; k<=i ; k++) {
        str += "&ensp;";
    }
     str+="<br>"
    console.log(str)   
}
document.getElementById("ex11").innerHTML= str 


//V) Exercice 12 - 1/222/3333...
  var str = "";
  for( i = 1; i <= 5 ; i++) {
      //add the white space to the left
      for (k=1 ; k<=(5-i) ; k++) {
          str += "&ensp;";
      }
      for( j = 0 ; j != (2*i -1) ; j++) {
          str += i;
      }
      for (k=1 ; k<=i ; k++) {
          str += "&ensp;";
      }
       str+="<br>"
      console.log(str)   
  }
  document.getElementById("ex12").innerHTML= str 


//vi) Exercice 13 - 1, 212, 32123 ... 
  var str = "";
  var n=5;
  for( i = 1; i <= n ; i++) {
      //add the white space to the left
    //   for (k=1 ; k<=(n-i) ; k++) {
    //       str += "&ensp;";
    //   }
      for( j=n ; j>=1 ; j--) {
          if  ( j<=i ) {
          str += j;
          } else {
              str+="&ensp;";
          }   
      }
      //add the st part of the piramid
      for (k=2 ; k<=i ; k++) {
          str += k;
     }
       str+="<br>"
      console.log(str)   
  }
  document.getElementById("ex13").innerHTML= str 