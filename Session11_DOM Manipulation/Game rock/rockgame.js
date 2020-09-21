var scissors = document.getElementById ('scissors')
var paper = document.getElementById ('paper')
var rock = document.getElementById ('rock')
console.log(scissors)

scissors.addEventListener('click', chooseScissors)
paper.addEventListener('click', choosePaper)
rock.addEventListener('click', chooseRock )

var myResultPara=document.getElementById("demo")
console.log(myResultPara)
//return 0 when you click on the scissors image
function chooseScissors () {
    var userChoice = 0;
    var computerChoice = Math.floor (Math.random()*3);
}
function choosePaper () {
    var userChoice = 1;
    var computerChoice = Math.floor (Math.random()*3);

function chooseRock () {
    var userChoice = 2;
    var computerChoice = Math.floor (Math.random()*3);
}



















// arr= ['rock', 'paper', 'scissors'];
// var computer = Math.floor(Math.random() * arr.length);
// console.log("Computer choice: " + arr[computer]);
// var x = arr[computer]
// // console.log(x)
// var user = Math.floor(Math.random() * arr.length);
// console.log("User choice: " + arr[user]);
// var y = arr[user]

// z = document.getElementById("demo")
// function play (){
//     if(x == y) {
//        z.innerHTML= x + " " + y + " " + "<br>" +" The result is a tie!" 
//   }
//    if(x == "rock" && y == "scissors") {
//         z.innerHTML= x + " " + y + " " + "<br>" +"Rock wins";
//       }else {
//         if(y == "paper") {
//           z.innerHTML= x + " " + y + " "+"<br>"+ "Paper wins"
//       }
//   }
//  }
//    if(x == "paper" && y == "rock") {  
//         z.innerHTML= x + " " + y + " " + "<br>"+"Paper wins";
//       } else {
//           if(y == "scissors") {
//             z.innerHTML= x + " " + y + " " + "<br>" +"Scissors wins"
//       }
//     }

//    if(x == "scissors" && y == "paper") {
//         z.innerHTML= x + " " + y + " "+ "<br>" +"Scissors wins"
//       } else {
//           if(y == "rock") {
//            z.innerHTML= x + " " + y + " " + "<br>"+"Rock win"
//           }
// }
    
     
