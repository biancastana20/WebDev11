document.getElementById("button").addEventListener("click", reverseString);

function reverseString(s){
    var s = document.getElementById("string").value;
    var newString = " ";

    for (var i = s.length-1; i >= 0; i--){
        newString += s[i];
    }
    // console.log(newString);
    var output = document.getElementById("rezultat");
    output.innerHTML = "The reversed string is: " + "\'" + newString + "\'";
}

