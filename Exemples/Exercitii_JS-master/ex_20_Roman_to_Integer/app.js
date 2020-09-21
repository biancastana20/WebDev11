document.getElementById("button").addEventListener("click", romanToInt);

const conversion = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1};

function romanToInt(){
    var n = document.getElementById("roman_number").value;

    const array = n.split(''); //descompune array-ul
    let total = 0;
    let current, currentValue, next, nextValue;

    
    for(let i = 0; i < array.length; i++){
        current = array[i];
        currentValue = conversion[current];

        next = array[i + 1];
        nextValue = conversion[next];

        if(currentValue < nextValue){
            total -= (currentValue);
        }
        else{
            total += (currentValue);
        }
        console.log(total); //afiseaza toate valorile 
    } 

    console.log(total); //afiseaza ultima valoare
    if(total < 4000){ //conditie optionala
        document.getElementById("result").innerHTML = total;
    }
    else{
        document.getElementById("result").innerHTML = 0;
    }
}