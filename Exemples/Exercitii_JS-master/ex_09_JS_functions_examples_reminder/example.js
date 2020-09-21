function storeNames() { 
    return arguments; 
}

// If we execute the following line in the console:
storeNames("Mulder", "Scully", "Alex Kryceck");
// The output will be { '0': 'Mulder', '1': 'Scully', '2': 'Alex Kryceck' }

function getGrades() {
    var args = Array.prototype.slice.call(arguments, 1, 3);
    return args;
}

// Let's output this!
console.log(getGrades(90, 100, 75, 40, 89, 95));

// OUTPUT SHOULD BE: //
// [100, 75] <- Why? Because it started from index 1 and stopped at index 3
// so, index 3 (40) wasn't taken into consideration.
//
// If we remove the '3' parameter, leaving just (arguments, 1) we'd get
// every argument from index 1: [100, 75, 40, 89, 95].


// slice() / slice.call()
//Since slice() has two (the parameter end is optional) parameters. You can grab a certain portion of the arguments by specifying the beginning and the ending of your portion (using the slice.call() method renders these two parameters optional, not just end).

function reminder() { 

    var a = Number(document.getElementById("number1").value);
    var b = Number(document.getElementById("number2").value);

    var reminder = a % b;

    var output = document.getElementById("rezultat1");
    output.innerHTML = a + " % " + b + " is " + reminder;
}




