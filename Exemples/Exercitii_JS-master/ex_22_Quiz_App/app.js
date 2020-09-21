// var buton = document.getElementById("go");
var test = document.querySelector(".test");
// var next = document.getElementById("next");
var count = 0;

go.addEventListener("click", myFunc);
function myFunc(){
    document.querySelector(".q1").style.visibility = "visible";
}

next1.addEventListener("click", myFunc2);
function myFunc2(){
    //pentru q1 - raspuns corect
    var correctAnswear = document.getElementById("3");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q1"));
    document.querySelector(".q2").style.visibility = "visible";
}

next2.addEventListener("click", myFunc3);
function myFunc3(){
    //pentru q2 - raspuns corect
    var correctAnswear = document.getElementById("3");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q2"));
    document.querySelector(".q3").style.visibility = "visible";
}

next3.addEventListener("click", myFunc4);
function myFunc4(){
    //pentru q3 - raspuns corect
    var correctAnswear = document.getElementById("4");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q3"));
    document.querySelector(".q4").style.visibility = "visible";
}

next4.addEventListener("click", myFunc5);
function myFunc5(){
    //pentru q4 - raspuns corect
    var correctAnswear = document.getElementById("1");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q4"));
    document.querySelector(".q5").style.visibility = "visible";
}

next5.addEventListener("click", myFunc6);
function myFunc6(){
    //pentru q5 - raspuns corect
    var correctAnswear = document.getElementById("3");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q5"));
    document.querySelector(".q6").style.visibility = "visible";
}

next6.addEventListener("click", myFunc7);
function myFunc7(){
    //pentru q6 - raspuns corect
    var correctAnswear = document.getElementById("3");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q6"));
    document.querySelector(".q7").style.visibility = "visible";
}

next7.addEventListener("click", myFunc8);
function myFunc8(){
    //pentru q7 - raspuns corect
    var correctAnswear = document.getElementById("3");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q7"));
    document.querySelector(".q8").style.visibility = "visible";
}

next8.addEventListener("click", myFunc9);
function myFunc9(){
    //pentru q8 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q8"));
    document.querySelector(".q9").style.visibility = "visible";
}

next9.addEventListener("click", myFunc10);
function myFunc10(){
    //pentru q9 - raspuns corect
    var correctAnswear = document.getElementById("1");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q9"));
    document.querySelector(".q10").style.visibility = "visible";
}

next10.addEventListener("click", myFunc11);
function myFunc11(){
    //pentru q10 - raspuns corect
    var correctAnswear = document.getElementById("3");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q10"));
    document.querySelector(".q11").style.visibility = "visible";
}

next11.addEventListener("click", myFunc12);
function myFunc12(){
    //pentru q11 - raspuns corect
    var correctAnswear = document.getElementById("1");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q11"));
    document.querySelector(".q12").style.visibility = "visible";
}

next12.addEventListener("click", myFunc13);
function myFunc13(){
    //pentru q12 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q12"));
    document.querySelector(".q13").style.visibility = "visible";
}

next13.addEventListener("click", myFunc14);
function myFunc14(){
    //pentru q13 - raspuns corect
    var correctAnswear = document.getElementById("1");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q13"));
    document.querySelector(".q14").style.visibility = "visible";
}

next14.addEventListener("click", myFunc15);
function myFunc15(){
    //pentru q14 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q14"));
    document.querySelector(".q15").style.visibility = "visible";
}

next15.addEventListener("click", myFunc16);
function myFunc16(){
    //pentru q15 - raspuns corect
    var correctAnswear = document.getElementById("3");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q15"));
    document.querySelector(".q16").style.visibility = "visible";
}

next16.addEventListener("click", myFunc17);
function myFunc17(){
    //pentru q16 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q16"));
    document.querySelector(".q17").style.visibility = "visible";
}

next17.addEventListener("click", myFunc18);
function myFunc18(){
    //pentru q17 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q17"));
    document.querySelector(".q18").style.visibility = "visible";
}

next18.addEventListener("click", myFunc19);
function myFunc19(){
    //pentru q18 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q18"));
    document.querySelector(".q19").style.visibility = "visible";
}

next19.addEventListener("click", myFunc20);
function myFunc20(){
    //pentru q19 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q19"));
    document.querySelector(".q20").style.visibility = "visible";
}

next20.addEventListener("click", myFunc21);
function myFunc21(){
    //pentru q20 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q20"));
    document.querySelector(".q21").style.visibility = "visible";
}

next21.addEventListener("click", myFunc22);
function myFunc22(){
    //pentru q21 - raspuns corect
    var correctAnswear = document.getElementById("1");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q21"));
    document.querySelector(".q22").style.visibility = "visible";
}

next22.addEventListener("click", myFunc23);
function myFunc23(){
    //pentru q22 - raspuns corect
    var correctAnswear = document.getElementById("1");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q22"));
    document.querySelector(".q23").style.visibility = "visible";
}

next23.addEventListener("click", myFunc24);
function myFunc24(){
    //pentru q23 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q23"));
    document.querySelector(".q24").style.visibility = "visible";
}

next24.addEventListener("click", myFunc25);
function myFunc25(){
    //pentru q24 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q24"));
    document.querySelector(".q25").style.visibility = "visible";
}

next25.addEventListener("click", myFunc26);
function myFunc26(){
    //pentru q25 - raspuns corect
    var correctAnswear = document.getElementById("1");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q25"));
    document.querySelector(".q26").style.visibility = "visible";
}

next26.addEventListener("click", myFunc27);
function myFunc27(){
    //pentru q26 - raspuns corect
    var correctAnswear = document.getElementById("3");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q26"));
    document.querySelector(".q27").style.visibility = "visible";
}

next27.addEventListener("click", myFunc28);
function myFunc28(){
    //pentru q27 - raspuns corect
    var correctAnswear = document.getElementById("1");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q27"));
    document.querySelector(".q28").style.visibility = "visible";
}

next28.addEventListener("click", myFunc29);
function myFunc29(){
    //pentru q28 - raspuns corect
    var correctAnswear = document.getElementById("1");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q28"));
    document.querySelector(".q29").style.visibility = "visible";
}

next29.addEventListener("click", myFunc30);
function myFunc30(){
    //pentru q29 - raspuns corect
    var correctAnswear = document.getElementById("1");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q29"));
    document.querySelector(".q30").style.visibility = "visible";
}

next30.addEventListener("click", myFunc31);
function myFunc31(){
    //pentru q30 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q30"));
    document.querySelector(".q31").style.visibility = "visible";
}

next31.addEventListener("click", myFunc32);
function myFunc32(){
    //pentru q31 - raspuns corect
    var correctAnswear = document.getElementById("1");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q31"));
    document.querySelector(".q32").style.visibility = "visible";
}

next32.addEventListener("click", myFunc33);
function myFunc33(){
    //pentru q32 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";
    test.removeChild(document.querySelector(".q32"));

    document.querySelector(".q33").style.visibility = "visible";
}

next33.addEventListener("click", myFunc34);
function myFunc34(){
    //pentru q33 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q33"));
    document.querySelector(".q34").style.visibility = "visible";
}

next34.addEventListener("click", myFunc35);
function myFunc35(){
    //pentru q34 - raspuns corect
    var correctAnswear = document.getElementById("3");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q34"));
    document.querySelector(".q35").style.visibility = "visible";
}

next35.addEventListener("click", myFunc36);
function myFunc36(){
    //pentru q35 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q35"));
    document.querySelector(".q36").style.visibility = "visible";
}

next36.addEventListener("click", myFunc37);
function myFunc37(){
    //pentru q36 - raspuns corect
    var correctAnswear = document.getElementById("2");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";
    
    test.removeChild(document.querySelector(".q36"));
    document.querySelector(".q37").style.visibility = "visible";
}

next37.addEventListener("click", myFunc38);
function myFunc38(){
    //pentru q37 - raspuns corect
    var correctAnswear = document.getElementById("4");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q37"));
    document.querySelector(".q38").style.visibility = "visible";
}

next38.addEventListener("click", myFunc39);
function myFunc39(){
    //pentru q38 - raspuns corect
    var correctAnswear = document.getElementById("1");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q38"));
    document.querySelector(".q39").style.visibility = "visible";
}

next39.addEventListener("click", myFunc40);
function myFunc40(){
    //pentru q39 - raspuns corect
    var correctAnswear = document.getElementById("1");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    document.getElementById("result").innerHTML = "Your score is: " + count + " of 40";

    test.removeChild(document.querySelector(".q39"));
    document.querySelector(".q40").style.visibility = "visible";
}

finish.addEventListener("click", myFunc41);
function myFunc41(){
    //pentru q40 - raspuns corect
    var correctAnswear = document.getElementById("3");
    if(correctAnswear.checked == true){
        count += 1;
    }
    else{
        count += 0;
    }
    //afisarea unui text in functie de rezultat
    var procent = (count * 100 ) / 40;
    var text = "";
    
    if(procent > 50){
        text = "Still have to learn!";
    }
    else if(procent > 90){
        text = "Almost perfect, keep going!";
    }
    else if(procent == 100){
        text = "Perfect!!";
    }
    else{
        text = "Well, you have a lot of studying to do!";
    }

    document.getElementById("result").innerHTML = "Result:".fontsize("30px") + "</br>" + "</br>" + count + " of 40" + "</br>" + "</br>" + procent + "%" + "</br>" + "</br>" + text;
    //stilizare
    document.getElementById("result").style.textAlign = "center";

    test.removeChild(document.querySelector(".q40"));
}

//pentru timer, start pe button "go" si stop pe buton "finish"
function myCounter(){
    var c = 0;
    document.getElementById("timer").innerHTML = ++c;
}

