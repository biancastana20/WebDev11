  

var button = document.getElementById("buttonAddContact")
button.addEventListener("click", addContact)
var name= document.getElementById("name")
var phone= document.getElementById("phone")
var table = document.getElementById("myTable");

var rIndex, table = document.getElementById("myTable")
var table = document.getElementById("myTable");
var rIndex;

function addContact() {
  var name= document.getElementById("name")
  var table = document.getElementById("myTable");
  var phone= document.getElementById("phone")

  //add row to initial table
    var row = table.insertRow();
    row.setAttribute("id", "rowId")
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
 //add cells in row
    cell1.innerHTML = name.value;
    cell2.innerHTML = phone.value;
    cell3.innerHTML = '<a href="#delete" onclick="deleteContact(this)">Delete</a>'
    cell4.innerHTML = '<a href="#edit" onclick = "selectRowToInput ()" >Edit</a>'
    
    var hiddenPart=document.querySelector(".box-agendaTable")
    hiddenPart.style.visibility="visible"
    document.querySelector(".form-inline").reset();
    //  selectRowToInput ()
  
}
//search index of row
function selectRowToInput (){
  var name= document.getElementById("name")
  var phone= document.getElementById("phone")
    var rIndex, table =document.getElementById("myTable")
  for (var i =1; i< table.rows.length; i++){
    table.rows[i].onclick = function (){
      //get the selected row index
      rIndex= this.rowIndex;
      // console.log(rIndex)
      name.value = this.cells [0].innerHTML
      phone.value = this.cells [1].innerHTML
      return rIndex;
    }  ;
  }
  var button = document.getElementById("buttonAddContact")
  button.addEventListener("click", editContact)
  button.removeEventListener("click", addContact)
  
  function editContact(x) {
    var name= document.getElementById("name")
    var phone= document.getElementById("phone")
    var table = document.getElementById("myTable");
    
    table.rows[rIndex].cells[0].innerHTML=name.value;
    table.rows[rIndex].cells[1].innerHTML=phone.value;
    // deleteInputs()
    document.querySelector(".form-inline").reset();
    var button = document.getElementById("buttonAddContact")
    button.addEventListener("click", addContact)
    button.removeEventListener("click", editContact)
    } 
  
}

function deleteContact (x){
  //console.log(x) // <a href="#delete" onclick="deleteContact(this)">Delete</a>
  var table = document.getElementById("myTable")
  var i = x.parentNode.parentNode.rowIndex;
  //console.log(i) // nr liniei pe care apas
  table.deleteRow(i)
  // deleteInputs()
  document.querySelector(".form-inline").reset();
  }

 
    // function deleteInputs() {
    //   document.getElementById("name").value=""
    //   document.getElementById("phone").value=""
    // }
    
  // add enter option to add contact 
  var phone= document.getElementById("phone")
  phone.addEventListener("keyup", eventEnter)
  function eventEnter (event){
      if (event.keyCode === 13 ) { //key of 13 is enter in keyboard
          // event.preventDefault (); //cancel default action of enter key
          document.getElementById("buttonAddContact").click()
      }
    }

    // var table = document.getElementById("myTable")
    // table.addEventListener ('click', function(x){
    //    console.log(x)
    //    console.log(x.target) //celula pe care o apas <td>..</td>
    //    var i = x.target.parentNode.rowIndex // indexul liniei unde apas
    //    console.log (i) //
    // })