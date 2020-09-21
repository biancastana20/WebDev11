//get elements from document
const titleElem = document.getElementById("title");
const authorElem = document.getElementById("author");
const isbnElem = document.getElementById("isbn");
const myTable = document.getElementById("myTable");
const buttonSubmit = document.getElementById("buttonSubmit");
const myForm = document.getElementById("myForm");
const validForm = document.querySelector(".validForm");
//check elem
//console.log(title, author, isbn, myTable, buttonSubmit, myForm, validForm)

class Book {
  constructor(titleElem, authorElem, isbnElem) {
    this.titleElem = titleElem;
    this.authorElem = authorElem;
    this.isbnElem = isbnElem;
  }
}

class Ui {
  addItem() {
    const book = new Book(titleElem.value, authorElem.value, isbnElem.value);
    var row = myTable.insertRow(); //add row
    var cell1 = row.insertCell(0); //add cell1
    var cell2 = row.insertCell(1); //add cell2
    var cell3 = row.insertCell(2); //add cell3
    var cell4 = row.insertCell(3); //add cell4

    cell1.innerHTML = book.titleElem;
    cell2.innerHTML = book.authorElem;
    cell3.innerHTML = book.isbnElem;
    cell4.innerHTML = "<button onclick = deleteItem(this)>X</button>";
    console.log(cell4);
  }

  successMessage(elem, message) {
    myTable.style.visibility = "visible";
    validForm.style.visibility = "visible";
    validForm.classList.remove("red");
    validForm.classList.add("green");
    validForm.innerHTML = message;
    myForm.reset();

    // setTimeout(() => {
    //   validForm.remove();
    // }, 3000);
  }

  errorMessage(elem, message) {
    validForm.style.visibility = "visible";
    validForm.classList.add("red");
    validForm.classList.remove("green");
    validForm.innerHTML = message;
  }
}
// initialize an object with class Ui property
// console.log(ui)
buttonSubmit.addEventListener("click", () => {
  let ui = new Ui();

  if (!titleElem.value || !authorElem.value || !isbnElem.value) {
    ui.errorMessage(validForm, "Please fill all field");
  } else {
    ui.addItem();
    ui.successMessage(validForm, "Book added with success");
  }
});

function deleteItem(x) {
  let i = x.parentNode.parentNode.rowIndex;
  myTable.deleteRow(i);
  document.querySelector(".form-inline").reset();
}
