var val=document.querySelector(".collection")
console.log(val)

var va=document.getElementsByTagName("ul")
console.log(va)

var x = document.createElement("li")
x.textContent="creion"
x.className='collection-item'
val.appendChild(x)

 var z= document.createElement ('a')
 z.innerHTML='<i class="fa fa-remove"></i>'
 x.appendChild(z)
 z.className="delete-item secondary-content"

 var n = document.getElementsByClassName("collection-item")
 console.log(n)
 //val.removeChild(n[4])
 val.removeChild(document.querySelector('li:nth-child(3)')); //am sters al-3lea element(li) din ul

var m = document.getElementsByTagName("li")
console.log(m)

var l = document.querySelector(" li:nth-child(3)")
console.log(l)