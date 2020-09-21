function formula3Numere()
{
    var textBoxElem1=document.getElementById("textbox1");
    var textBoxElem2=document.getElementById("textbox2");
    var textBoxElem3=document.getElementById("textbox3");    

    var a = textBoxElem1.value;
    var b = textBoxElem2.value;
    var c = textBoxElem3.value;

    var formula = ( ( Number(a)*Number(b) ) + ( Number(b)*Number(c) ) ) / ( Number(a)+Number(b) );
    
    alert("Rezultatul este: " + formula);
}

function maximumOf3Numbers()
{
    var textBoxElem4=document.getElementById("textbox4");
    var textBoxElem5=document.getElementById("textbox5");
    var textBoxElem6=document.getElementById("textbox6");    

    var a = textBoxElem4.value;
    var b = textBoxElem5.value;
    var c = textBoxElem6.value;

    if(a > b && a > c)
    {
        alert("Numarul maxim este: " + a);
    }
    else if(b > a && b > c)
    {
        alert("Numarul maxim este: " + b);
    }
    else if(c > a && c > b)
    {
        alert("Numarul maxim este: " + c);
    }
    else
    {
        alert("Introduceti cel putin un numar!");
    }
    
}

function sumAllEvenNumbers()
{
    var sum = 0;
    

    var textBoxElem7=document.getElementById("textbox7");
    var textBoxElem8=document.getElementById("textbox8");

    var n = textBoxElem7.value;
    var m = textBoxElem8.value;

    if(Number(n) < Number(m))
    {
        var i = Number(n);
        while(Number(i) <= Number(m))
        {
            if(i%2 == 0)
            {
                sum += i;
            }
            i++;
        }
        alert("Suma numerelor pare de la " + n + " la " + m + " este: " + sum);
    }
    else if(Number(m) < Number(n))
    {
        var i = Number(m);
        while(Number(i) <= Number(n))
        {
            if(i%2 == 0)
            {
                sum += i;
            }
            i++;
        }
        alert("Suma numerelor pare de la " + m + " la " + n + " este: " + sum);
    }
    else
    {
        alert("suma numerelor este zero");
    }
    
}