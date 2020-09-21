function reverse(){
    var number = parseInt(document.getElementById('text1').value);
    var reversedNumber = "";

    while( number != 0){
        reversedNumber += number % 10;
        number = parseInt(number/10);
    }

    var output = document.getElementById('p1');
    output.innerHTML = "The result is: " + reversedNumber;
}

function sum(){
    // 1 take the inputs
    var a = Number(document.getElementById('texta').value);
    var b = Number(document.getElementById('textb').value);

    // 2 check the inputs
    console.log(a);
    console.log(b);

    // 3 process the output
    var sum = a + b;

    // 4 add the output to paragraph
    // take the paragraph
    var output = document.getElementById('psum');
    // 2 + 3 = 5
    output.innerHTML = a + " + "  + b + " = " + sum;
}