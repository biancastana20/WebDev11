// if (conditie){
//     executa ceva
// }else {
//     executa altceva
// }

var val = 23;

if(val == '30'){
    console.log('Val is  30');
}else if (val == 20){
    console.log('val is  20');
}else if (val == 10){
    console.log('val is  10');
}else{
    console.log('Another value');
}

val = 42;
// daca e divizil cu 3 sa afiseze ca e div cu 3
// daca e divizil cu 7 sa afiseze ca e div cu 7
// daca e divizil cu 21 sa afiseze ca e div cu 21
if(val % 21 === 0){
    console.log('div cu 21');
}
else if(val % 7 === 0){
    console.log('div cu 7');
}
else if(val % 3 === 0){
    console.log('div cu 3');
}
else{
    console.log(val);
}






