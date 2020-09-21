document.getElementById("button").addEventListener("click", singleNumber);

function singleNumber(){
    var s = document.getElementById("array").value;
    var unique = 0;

    for(var i = 0; i < s.length; i++){
        unique ^= s[i];
    }
    document.getElementById("rezultat").innerHTML = "The single number is: " + unique;
    // console.log(unique);    
}

// **Explanation of XOR Gate ** ^
// XOR gate (Exclusive OR) is a digital logic gate that gives a true (1 ) output when the number of true inputs is odd
// what does that mean? we will refer to XOR with ^ :
// 1 ^ 1 => 0 ( because we have two "TRUE" inputs, because 1 refers to true )
// 0^1 => 1 ( because we have just one "TRUE" input )
// 0^X where x is a number = X because XOR as we said is a digital logic gate so it deals with binary numbers, let's convert 0 and 1 to binary numbers

// 0 in binary => 0000 - 1 in binary => 0001
// applying the XOR definition as we said above between each digit with the other one:
// (0) ^ (1) => 0
// (0)^(0) => 0
// (0)^(0) => 0
// (0)^(0) => 1
// so the result of 0000 ^ 0001 is 0001 which is 1
// for that reason 0^X where x is any number it will equels X;
// also
// X^X => 0
// you can try it as we did above.

// **How The code works: **
// we started with result 0, and each time we apply the xor function between the result and the current number in the array and store the answer in the result again.
// let's suppose the nums array is [4,5,2,5,2]
// 4^5^2^5^2 => 4
// because duplicate numbers go to 0 as we explain above.