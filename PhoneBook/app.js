// get elements from document
const button = document.getElementById("buttonAddContact");
button.addEventListener("click", addContact);
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const table = document.getElementById("myTable");


function addContact() {
  //add row to initial table
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  //add cells in row
  cell1.innerHTML = name.value;
  cell2.innerHTML = phone.value;
  cell3.innerHTML =
    '<a href="#delete" onclick="deleteContact(this)">Delete</a>';
  cell4.innerHTML = '<a href="#edit" onclick = "selectRowToInput ()" >Edit</a>';
  const hiddenPart = document.querySelector(".box-agendaTable"); //visible of the table parte after add button is pressed
  hiddenPart.style.visibility = "visible";
  document.querySelector(".form-inline").reset(); //reset inputs
}

function selectRowToInput() { //search index of row and put it in inputs
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      rIndex = this.rowIndex; //get the selected row index
      console.log(rIndex);
      //get the cell from selected rIndex
      name.value = this.cells[0].innerHTML;
      phone.value = this.cells[1].innerHTML;
      return rIndex;
    };
  }
  //cand modific contactul si apas pe add sa execute functia de edit -> sa se puna contactele noi peste cele vechi, si remove fctia de add contact de pe buton pt ca asa mi-ar adauga si o noua linie goala.
  button.addEventListener("click", editContact);
  button.removeEventListener("click", addContact);

  function editContact(x) {
    table.rows[rIndex].cells[0].innerHTML = name.value;
    table.rows[rIndex].cells[1].innerHTML = phone.value;
    document.querySelector(".form-inline").reset();
    //pentru a putea adauga iar un contact nou dupa editare (sa isi piarda fctia de edit si sa o reia pe cea de add contact)
    button.addEventListener("click", addContact);
    button.removeEventListener("click", editContact);
  }
}

function deleteContact(x) {
  let i = x.parentNode.parentNode.rowIndex;
  table.deleteRow(i);
  document.querySelector(".form-inline").reset();
}

// function deleteInputs() {
//   document.getElementById("name").value=""
//   document.getElementById("phone").value=""
// }

// add enter option to add contact
phone.addEventListener("keyup", eventEnter);

function eventEnter(event) {
  if (event.keyCode === 13) {
    //key of 13 is enter in keyboard
    // event.preventDefault (); //cancel default action of enter key
    document.getElementById("buttonAddContact").click();
  }
}