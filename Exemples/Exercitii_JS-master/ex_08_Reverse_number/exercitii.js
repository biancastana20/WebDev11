//positive number
function reverse(){

    var number = parseInt(document.getElementById("number").value);
    var reversedNumber = "";

    while(number != 0){
        reversedNumber += number % 10;
        number = parseInt(number/10);
    }
    
    var output = document.getElementById("rezultat");
    output.innerHTML = "the result is: " + reversedNumber;
}

//reverse negative number
var reverse = function(int) {
    const intRev = int.toString().split('').reverse().join('');
    return parseInt(intRev) * Math.sign(int);
};

function reverse(n) { //numere mai mici de 2e32 si cele negative
    var reverseN = 0;
    var sign = n < 0;
    n = Math.abs(n);
    while (n) {
        reverseN = reverseN*10 + (n % 10);
        n = Math.floor(n/10);
    }
    return reverseN > 0x7FFFFFFF ? 0 : sign ? -reverseN : reverseN;
}

function leapYear(){

    var year = document.getElementById("year").value;
    var leapYear = "";

    if(year % 4 != 0){ //nedivizibil cu 4
        leapYear = "common year";
    }
    else if(year % 100 != 0){ //nedivizibil cu 100
        leapYear = "leap year";
    }
    else if(year % 400 != 0){ //nedivizibil cu 400
        leapYear = "common year";
    }
    else{
        leapYear = "leap year";
    }

    var output = document.getElementById("rezultat2");
    output.innerHTML = year + " --> " + leapYear;
}


function sum(){
    
    var a = Number(document.getElementById("number1").value);
    var b = Number(document.getElementById("number2").value);

    var sum = a + b;

    var output = document.getElementById("rezultat3");
    output.innerHTML = a + " + " + b + " = " + sum;
}

function subtraction(){
    var a = Number(document.getElementById("number3").value);
    var b = Number(document.getElementById("number4").value);

    var subtraction = a - b;

    var output = document.getElementById("rezultat4");
    output.innerHTML = a + " - " + b + " = " + subtraction;
}

function multiplication(){
    var a = Number(document.getElementById("number5").value);
    var b = Number(document.getElementById("number6").value);

    var multiplication = a * b;

    var output = document.getElementById("rezultat5");
    output.innerHTML = a + " * " + b + " = " + multiplication;
}

function division(){
    var a = document.getElementById("number7").value; //input is type 'number' in html
    var b = document.getElementById("number8").value;

    var division = a / b;

    var output = document.getElementById("rezultat6");
    output.innerHTML = a + " / " + b + " = " + division;
}