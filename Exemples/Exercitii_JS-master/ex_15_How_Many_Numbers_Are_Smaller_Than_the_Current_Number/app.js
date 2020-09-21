document.getElementById("button").addEventListener("click", smallerThenCurrentnumber);

function smallerThenCurrentnumber(){
    var arr = document.getElementById("smaller_number").value;
    var countSmaller = [];

    for (var i = 0; i < arr.length; i++){ 
        countSmaller[i] = 0;
        for (var j = 0; j < arr.length; j++){ 
            if (arr[i] != arr[j] && arr[j] < arr[i]){
                countSmaller[i] += 1;
            }        
        } 
    }
    document.getElementById("rezultat").innerHTML = countSmaller;
} 
