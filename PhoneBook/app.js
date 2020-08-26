

var button = document.getElementById("buttonAddContact")
button.addEventListener("click", addContact)

function addContact() {
    
    var table = document.getElementById("myTable");
    var name= document.getElementById("name")
    var phone= document.getElementById("phone")
  //add row to initial table
    var row = table.insertRow();
    row.className = "row"
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
 //add cells in row
    cell1.innerHTML = name.value;
    cell2.innerHTML = phone.value;
    cell3.innerHTML = '<a href="#delete" onclick="deleteContact()">Delete</a>'
    cell4.innerHTML = '<a href="#delete" onclick="editContact() >Edit</a>'

    var hiddenPart=document.querySelector(".box-agendaTable")
    hiddenPart.style.visibility="visible"
    document.querySelector(".form-inline").reset();
   
}

function deleteContact (){
    document.getElementById("myTable").deleteRow(1);

}