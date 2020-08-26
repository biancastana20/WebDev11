

var button = document.getElementById("buttonAddContact")
button.addEventListener("click", addContact)

function addContact() {
    
    var table = document.getElementById("myTable");
    var name= document.getElementById("name")
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
    cell4.innerHTML = '<a href="#edit" onclick="editContact(this)" >Edit</a>'
    
    var hiddenPart=document.querySelector(".box-agendaTable")
    hiddenPart.style.visibility="visible"
    document.querySelector(".form-inline").reset();
   
}

function deleteContact (rowI){
   var i = rowI.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}