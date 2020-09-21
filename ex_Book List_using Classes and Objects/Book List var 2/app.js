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
  //class that contain all methods

  addItem() {
    const book = new Book(titleElem.value, authorElem.value, isbnElem.value);
    if (titleElem.value && authorElem.value && isbnElem.value) {
      var row = myTable.insertRow(); //add row
      var cell1 = row.insertCell(0); //add cell1
      var cell2 = row.insertCell(1); //add cell2
      var cell3 = row.insertCell(2); //add cell3
      var cell4 = row.insertCell(3); //add cell4

      cell1.innerHTML = book.titleElem;
      cell2.innerHTML = book.authorElem;
      cell3.innerHTML = book.isbnElem;
      cell4.innerHTML = "<button onclick = ui.deleteItem(this)>X</button>";

      console.log(cell4);
      myTable.style.visibility = "visible";

      validForm.style.visibility = "visible";
      validForm.innerHTML = "Book added with success!";
      validForm.classList.add("green");

      myForm.reset();

      setTimeout(() => {
        validForm.remove();
      }, 3000); // sa dispara bannerul "Thnak you..." dupa 23sec
    } else {
      validForm.style.visibility = "visible";
      validForm.classList.add("red");
      validForm.innerHTML = "Please fill in all fields!";
    }
  }
  deleteItem(x) {
    var i = x.parentNode.parentNode.rowIndex; //linia
    myTable.deleteRow(i);
    myForm.reset();
  }
}
let ui = new Ui(); // initialize an object with class Ui property
// console.log(ui)
buttonSubmit.addEventListener("click", () => ui.addItem());
