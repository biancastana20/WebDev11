var val=document.getElementById("task-title") //iau el h5 din HTML (are id task-title)
 //Add text to existing h5 el
  val.style.background="red" // ii fac background rosu
  var text = document.createTextNode (" list"); //creez textcont
  val.appendChild(text) // adaug text elementului h5

  val.style.color="white"//ii fac scrisul alb
  val.style.padding = '10px';
//   val.textContent="Todos" //change content of h5 el

  //Add text to existing h5 el and color in green
  var y =document.createElement("span") 
  y.innerHTML=" text"
  y.style.color="green"
  val.appendChild(y)

//console.log(document.querySelector('#task-title'))

 var x = document.querySelector(".collection li").style.color="red" //selecteaza doar primul li din tot documentul
//console.log(x)
var colItems = document.getElementsByClassName('collection-item')//return un array de el cu aceasta clasa
//console.log(colItems)
colItems[3].style.color ="blue"
colItems[4].textContent = "Eat";

var colItemsByTag = document.getElementsByTagName('li');
//console.log(colItemsByTag); //acelasi lucru ca mai sus -  un array cu toate li

var links = document.querySelectorAll('li');
console.log(links);//acelasi lucru ca mai sus - un array
for (i=0 ; i < links.length ;i++){
    if (i%2==0)
   links[i].style.color="pink"
}

var oddLis = document.querySelectorAll('li:nth-child(odd)');//selecteaza odd nr from the array li and put in another array
for ( var i =0; i < oddLis.length; i++){
    oddLis[i].style.color="pink"
}
console.log(oddLis)