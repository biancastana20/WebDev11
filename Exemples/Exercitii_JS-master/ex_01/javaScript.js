function printMsg(mesaj)
{
    alert(mesaj);
}

function prezentare(nume)
{
    alert("Salut " + nume + "!");
}

function sum1toN(n)
{
    var sum = 0;
    for(var i = 0; i <=n; i++)
    {
        sum = sum + i;
    }
    alert("Suma elementelor de la 1 la " + n + " este " + sum + " !");
}

// My first example sum of 2 numbers
function sumOf2Numbers()
{
    var textBoxElem1=document.getElementById("textbox1");
    var textBoxElem2=document.getElementById("textbox2");
    console.log(textBoxElem1);

    var value1 = textBoxElem1.value;
    var value2 = textBoxElem2.value;

    var paragraphElement = document.getElementById("myP1");

    var sum = Number(value1) + Number(value2);

    myP1.innerHTML = "Suma " + value1 + " + " + value2 + " este: " + sum;
    
}

// Workshop part 1

function AdditionOf2Numbers()
{
    var el1=document.getElementById("textbox3");
    var el2=document.getElementById("textbox4");  
    
    var val1 = el1.value;
    var val2 = el2.value;

    var sum = Number(val1) + Number(val2);

    firstP.innerHTML = val1 + " + " + val2 + " is: " + sum;
}

function sub()
{
    var el1=document.getElementById("textbox3");
    var el2=document.getElementById("textbox4");  
    
    var val1 = el1.value;
    var val2 = el2.value;

    var sub = Number(val1) - Number(val2);

    firstP.innerHTML = val1 + " - " + val2 + " is: " + sub;
}

function multiply()
{
    var el1=document.getElementById("textbox3");
    var el2=document.getElementById("textbox4");  
    
    var val1 = el1.value;
    var val2 = el2.value;

    var multiply = Number(val1) * Number(val2);

    firstP.innerHTML = val1 + " * " + val2 + " is: " + multiply; 
}

function division()
{
    var el1=document.getElementById("textbox3");
    var el2=document.getElementById("textbox4");  
    
    var val1 = el1.value;
    var val2 = el2.value;

    var division = Number(val1) / Number(val2);

    firstP.innerHTML = val1 + " / " + val2 + " is: " + division; 
}

function modulus()
{
    var el1=document.getElementById("textbox3");
    var el2=document.getElementById("textbox4");  
    
    var val1 = el1.value;
    var val2 = el2.value;

    var modulus = Number(val1) % Number(val2);

    firstP.innerHTML = val1 + " / " + val2 + " is: " + modulus; 
}



    function verifyDay()
    {
    
        var elCNP=document.getElementById("textbox5");
        var elDay=document.getElementById("textbox6");
        
        var valCNP = elCNP.value;
        var valDay = elDay.value;
        

        var dayFromCNP=valCNP.substring(5,7);
        
        if(valDay != dayFromCNP)
        {
            verifyD.innerHTML = "Day don't match";
        }
        else
        {
            verifyD.innerHTML = "Day match";
        }
    } 

    
    function verifyMonth()
    {    
        var elMonth=document.getElementById("textbox7");
        var elCNP=document.getElementById("textbox5");

        var valMonth = elMonth.value;
        var valCNP = elCNP.value;

        var monthFromCNP=valCNP.substring(3,5);

        if(valMonth != monthFromCNP)
        {
            verifyM.innerHTML = "Month don't match";
        }
        else
        {
            verifyM.innerHTML = "Month match";
        }

    }
    
    function verifyYear()
    {
        var elYear=document.getElementById("textbox8");
        var elCNP=document.getElementById("textbox5");

        var valYear= elYear.value;
        var valCNP = elCNP.value;

        var yearFromCNP=valCNP.substring(1,3);

        if(valYear.substring(2,4) != yearFromCNP)
        {
            verifyY.innerHTML = "Year don't match";
        }
        else
        {
            verifyY.innerHTML = "Year match";
        }
    }    

        

