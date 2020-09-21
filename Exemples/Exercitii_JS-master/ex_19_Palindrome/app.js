document.getElementById("button").addEventListener("click", palindromeNum);

function palindromeNum() {
    var n = parseInt(document.getElementById("number").value);
    var rem, temp, final = 0;

    temp = n;
    while(n > 0){
        rem = n % 10; //fara suma
        n = parseInt(n / 10);
        final = final * 10 + rem; //reversed number
    }
    console.log(rem);
    console.log(final);
    
    if(final === temp){
        document.getElementById("result").innerHTML = true;
        // document.getElementById("result").innerHTML = temp + " = " + final + " " + true;
    }
    else{
        document.getElementById("result").innerHTML = false;
        // document.getElementById("result").innerHTML = temp + " = " + final + " " + false;
    }
}