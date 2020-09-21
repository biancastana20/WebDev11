//get elements from document
const titleElem = document.getElementById("title");
const authorElem = document.getElementById("author");
const isbnElem = document.getElementById("isbn");
const myTable = document.getElementById("myTable");
const buttonSubmit = document.getElementById("buttonSubmit");
const myForm = document.getElementById("myForm");
const validForm = document.querySelector(".validationMessageArea");
//check elem
//console.log(title, author, isbn, myTable, buttonSubmit, myForm, validForm)

//CLASS FOR BOOKS
class Book {
  constructor(titleElem, authorElem, isbnElem) {
    console.log(this);
    this.titleElem = titleElem;
    this.authorElem = authorElem;
    this.isbnElem = isbnElem;
  }
}
// ADD METHODS TO BOOK CLASS
class Ui {
  addItem() {
    const book = new Book(titleElem.value, authorElem.value, isbnElem.value);
    // console.log(book);
    let row = myTable.insertRow(); //add row
    let cell1 = row.insertCell(0); //add cell1
    let cell2 = row.insertCell(1); //add cell2
    let cell3 = row.insertCell(2); //add cell3
    let cell4 = row.insertCell(3); //add cell4
    cell1.innerHTML = book.titleElem;
    cell2.innerHTML = book.authorElem;
    cell3.innerHTML = book.isbnElem;
    // CREATE BUTTON 
    // cell4.innerHTML = `<button onclick = this.deleteItem(${row.rowIndex})>X</button>`;
    let btnDel = document.createElement("BUTTON"); // Create a <button> element
    btnDel.innerHTML = "X"; // Insert text
    cell4.appendChild(btnDel); //append to cell4
    //ADD EVENT LISTENER (DELETE INDEX)
    btnDel.addEventListener('click', () => {
      this.deleteItem(row.rowIndex) //indexul liniei pe care o adaug
    })
    //console.log(row.rowIndex)

  }

  deleteItem(index) {
    myTable.deleteRow(index);
    this.successMessage("Book deleted with success!");
    this.hideMessage()
  }

  successMessage(message) {
    myTable.style.visibility = "visible";
    validForm.style.visibility = "visible";
    validForm.classList.remove("failMessage");
    validForm.classList.add("successMessage");
    validForm.innerHTML = message;
    myForm.reset();
  }

  errorMessage(message) {
    validForm.style.visibility = "visible";
    validForm.classList.add("failMessage");
    validForm.classList.remove("successMessage");
    validForm.innerHTML = message;
  }

  hideMessage() {
    setTimeout(() => validForm.style.visibility = 'hidden', 2000)
  }
}

// SUBMIT BUTTON EVENT -> ADD ITEM
buttonSubmit.addEventListener("click", () => {
  let ui = new Ui(); // initialize an object with class Ui property
  // console.log(ui)
  if (!titleElem.value || !authorElem.value || !isbnElem.value) {
    ui.errorMessage("Please fill all fields!");
  } else {
    ui.addItem();
    ui.successMessage("Book added with success!");
    ui.hideMessage()
  }
});