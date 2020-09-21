document.getElementById("button").addEventListener("click", subtractProdSumOfDigits);

function subtractProdSumOfDigits(){
    var n = parseInt(document.getElementById("number").value);
    var num = n.toString(); //transforma nr in string
    var product = 1;
    var sum = 0;
    var res;

    for(var i = 0; i < num.length; i++){
        var number = parseInt(num[i]);//se iau indicii si se transforma in numar
        product *= number;
        sum += number;
    }
    res = product - sum;

   document.getElementById("rezultat").innerHTML = "Product of digits = " + product + "</br>" + "Sum of digits = " + sum + "</br>" + "Result = " + res;
}


//pentru orice n
var subtractProductAndSum = function(n) {
    let num = n.toString();
    var product = 1;
    var sum = 0;
    var res;

    for(var i = 0; i < num.length; i++){
        let number = parseInt(num[i]);
        product *= number;
        sum += number;
    }
    res = product - sum;
    return res;
};