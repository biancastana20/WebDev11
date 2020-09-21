function calculateBMI()
{
    var greutate = Number(document.getElementById('input-greutate').value);
    var inaltime = Number(document.getElementById('input-inaltime').value);
    // console.log(greutate);
    // console.log(inaltime);
    var BMI = greutate / ( inaltime * inaltime);
    BMI = BMI.toFixed(1);
    // console.log(BMI);

    // console.log(getBodyType(BMI));
    var out = document.getElementById("resultat");
    out.style.color = getColor(getBodyType(BMI));
    out.style.fontWeight = "bold";

    out.innerHTML = "BMI-ul este: ".fontcolor("black") + BMI + " si sunteti: ".fontcolor("black") + getBodyType(BMI);

}

function getBodyType(BMI)
{
    var bodyType = " ";
    if (BMI <= 18.5)
    {
        bodyType = "subponderal";
    }
    else if (BMI > 18.5 && BMI <= 25)
    {
        bodyType = "normal";
        
    }
    else if (BMI > 25 && BMI <= 30)
    {
        bodyType = "supraponderal";

    }
    else if (BMI >= 30)
    {
        bodyType = "obez";

    }
    return bodyType;
}

function getColor(bodyType)
{
    var color = "black";
    switch(bodyType)
    {
        case "subponderal": 
            color = "blue";
            break;
        case "normal": 
            color = "green";
            break;
        case "supraponderal": 
            color = "orange";
            break;
        case "obez": 
            color = "brown";
            break;    
    }
    return color;
}

//span
//document.getElementById("myText").style.fontSize = "20";