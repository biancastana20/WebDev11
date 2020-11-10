//------------------- ----------------------- VARIABLES DECLARATION----------------------------------------------
const containerBooks = document.getElementById('center-books');
const detailsBook = document.getElementById('details-book-container');
const tableAdmin = document.getElementById('table-books');
const bookFiltered = document.getElementById('books-filtered')
//---------------------------------------------- API FROM FIREBASE ------------------------------------------------




//------------------------------------------------------START LINK ALL PAGES -----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  // console.log(window)
  // console.log(window.location);
  if (window.location.href.indexOf("index.html") >= 0) {
    //daca pozitia indexului gasit e > 0 altfel returneaza -1
     ui.displayBooks();
     ui.filterBookBtn();
  }
  if (window.location.href.indexOf("details.html") >= 0) {
    //file:///E:/app_Online%20Store/details.html?id=2
    const id = window.location.search.split("=")[1];
    // console.log(id);//?id=2
    ui.showDetailsBook(id);
    // ui.addToChart(id)
  }
  if (window.location.href.indexOf("admin.html") >= 0) {
     ui.managebooks();
     ui.addNewBook()
  }
});
//-------------------------------------- -------------- END LINK ALL PAGES -------------------------------------------


//---------------------------------------------------- class Book + constructor atribute -----------------------------
class Book {
  constructor(path, title, author, price, description, quantity, id) {
    // console.log(this);
    this.path = path;
    this.title = title;
    this.author = author;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
    this.id = id;
  }
}

// ----------------------------------- GET ALL BOOKS FROM FIREBASE-------------------------------------------------
const BOOKS_URL = "https://online-shop-for-books.firebaseio.com/books.json";
async function getBooksFromFirebase(method) {
  let res = await fetch(BOOKS_URL, {method:method})
  let data = await res.json()
  //console.log(data)
  return data;
}

const BOOKS_ITEM_URL = "https://online-shop-for-books.firebaseio.com/books/";
async function apiOperation(id, method) {
  let res = await fetch(BOOKS_ITEM_URL + id + '.json', { method: method }) //id = 0 1 2 ..... -MKokWAPUCmGuB5
  let data = await res.json()
  return data
}

class UI {
  //---------------------------------------- START LIST OF PRODUCTS --------------------------------------------------
  async displayBooks() {
    let data = await getBooksFromFirebase('GET')
    //console.log(data)
    let ids = Object.keys(data); // ['0','1','2' .....'-MK9pu7lhj89ySrYFstC']
    // containerBooks.innerHTML = ""
    ids.forEach(function (key) {
      let book = new Book(data.path, data.title, data.author, data.price, data.description, data.quantity, data.id);
      //console.log(book)
      containerBooks.innerHTML += `
                    <article class="book">
                    <div class="book-container">
                        <img src="${data[key].path}" alt="book" class="book-img">
                        <h4>${data[key].title}</h4>
                        <p>(${data[key].author})</p>
                        <div class="book-details-price">
                            <h3 class="book-price">$${data[key].price}</h3>
                            <a href="details.html?id=${key}" class="book-details-btn">DETAILS</a>
                        </div>
                    </div>
                </article> `;
    });
  }
  //---------------------------------------------- END  LIST OF PRODUCTS ---------------------------------------------

  //----------------------------------- ----------- SEARCH BOOK BY TITLE -----------------------------------------------
  async searchBook(title) {
    let data = await getBooksFromFirebase('GET')
    console.log(data)
    let arr = [];
    let ids = Object.keys(data);
        // console.log(ids) ["0", "1", "2"..."39"]
    ids.forEach(function (key) {
          //console.log(key) //0 1 2 3 ...39
        let book = new Book(
            data[key].path,
            data[key].title,
            data[key].author,
            data[key].price,
            data[key].description,
            data[key].quantity,
            key,  // id cartii va lua val lui key -> pentru a putea da search si printre cartile adaugate din aplicatie altfel puteam pune data[key].id
            //ca sa mearga butonul details
        );
          //console.log(book)
       arr.push(book);
      });
        //filtram prin array arr ingredientele
     const filtered = arr.filter((book) => {
         return book.title.toLowerCase().indexOf(title) >= 0; // sa existe titlul pe care il caut, altfel return -1
      });
        bookFiltered.innerHTML = ""; //se reinitializeaza cu noile valori
        filtered.map((element) => { //parcurgere arr
          bookFiltered.innerHTML += `
              <article class="book">
                <div class="book-container">
                    <img src="${element.path}" alt="book" class="book-img">
                    <h4>${element.title}</h4>
                    <p>(${element.author})</p>
                    <div class="book-details-price">
                        <h3 class="book-price">$${element.price}</h3>
                        <a href="details.html?id=${element.id}" class="book-details-btn">DETAILS</a>
                    </div>
                </div>
              </article> `;
        });
  }

  filterBookBtn() {
    const searchBookBtn = document.getElementById('nav-button-search-book')
    const inputTitle = document.getElementById('nav-search-book')

    searchBookBtn.addEventListener("click", (e) => {
      e.preventDefault(); 
      if (!(inputTitle.value)) {
        alert("Please add a book title!");
      } else {
        this.searchBook(inputTitle.value);
      }
    });
  }
  //----------------------------------- ----------- END SEARCH BOOK BY TITLE -----------------------------------------------

  //---------------------------------------------- START DETAILS PAGE ------------------------------------------------
  // details button event from (index.html) --> details.html
  async showDetailsBook(id) { 
    let data = await apiOperation(id, 'GET') //id = 0 1 2 ..... -MKokWAPUCmGuB5
    console.log(data) //doar obiectul cu id resp
        detailsBook.innerHTML += `
                    <article class="details-book-container">
                        <img class="details-book-img" src="${data.path}" alt="Book" />
                        <div class="details-book-info">
                            <h3>${data.title}</h3>
                            <h5>Author: ${data.author}</h5>
                            <p>Price: $${data.price}</p>
                            <p>In stoc: ${data.quantity}<p>
                            Cantitate <input type="number" id="details-book-quantity" value="1">
                            <div>
                                <button class="btn-add-to-cart" book-id="${id}" onclick ="addToChart('${id}')">Add to cart</button>
                            </div>
                            <div class="details-book-description">
                                <h4>Description of the book:</h4>
                                <br>
                                <p>${data.description}</p>
                            </div>
                      </div>
                    </article> `;
  }
      

  //------------------------------------------------ ------END DETAILS PAGE ------------------------------------------

  //------------------------- ---------------------- START ADMIN PAGE WITH LIST OF PRODUCTS --------------------------
  async managebooks() {
    let data = await getBooksFromFirebase('GET')
    console.log(data)
        let ids = Object.keys(data);
        //console.log(ids); // ['0','1','2' .....'-MK9pu7lhj89ySrYFstC']
        ids.forEach(function (key) {
          //console.log(key) // 0, 1, 2 ...., -MK9pu7jl
          tableAdmin.innerHTML += `
              <tr id='${key}'>
                <td>
                    <img src="${data[key].path}" alt="book" class="admin-book-img">
                </td>
                  <td>
                      <div class="title-book">
                          <h5>${data[key].title}</h5>
                          <p>${data[key].author}</p>
                      </div>
                  </td>
                  <td>
                      <h5 class="admin-book-price">$${data[key].price}</h5>
                  </td>
                  <td>
                      <span>${data[key].quantity}</span>
                  </td>
                  <td>
                      <a href="#" id="btn-remove-book" onclick="deleteBook('${key}')">Remove</a>
                  </td>
              </tr>`;
        });
      }
  //---------------------------------------------- END ADMIN PAGE WITH LIST OF PRODUCTS-------------------------------


  //-------------------------------------------------------  ADD NEW BOOK button --------------------------------------
  addNewBook() {
      document.getElementById("header-btn-add-new-book").addEventListener("click", () => {
      document.getElementById("product-management-container").style.display = "none"
      document.getElementById("add-new-book-container").style.visibility = "visible"
    })
    // --------------------------------- ------------- START SAVE BOOK BUTTON --> POST METHOD -------------------------
      const addBookId = document.getElementById("book-id")
      const addImageBook = document.getElementById("image")
      const addTitleBook = document.getElementById("title")
      const addAuthorBook = document.getElementById("author")
      const addPriceBook = document.getElementById("price")
      const addDescriptionBook = document.getElementById("description")
      const addQuantityBook = document.getElementById("quantity")

      document.getElementById("header-btn-save-book").addEventListener("click", async () => {
     // const ui = new UI();
      //console.log(ui) UI{ cu toate metodele manageBook/getBooks/findBook/filterBtn...}
       let newBook = new Book(
          addImageBook.value,
          addTitleBook.value,
          addAuthorBook.value,
          addPriceBook.value,
          addDescriptionBook.value,
          addQuantityBook.value,
          addBookId.value
      );
     // console.log(newBook)  // {....}
      let res = await fetch (BOOKS_URL, {
        method: 'POST',
        body: JSON.stringify(newBook)
      })
      let data = await res.json();
      console.log(data)
      location.reload();
      document.getElementById("product-management-container").style.display = "block"
      document.getElementById("add-new-book-container").style.visibility = "hidden"
    })
  }
  //------------------------ -----------------------------END ADD NEW BOOK button -------------------------------------------
}


//-------------------------------------------   DELETE from ADMIN --------------------------------------
async function deleteBook(id) {
  document.getElementById(`${id}`).remove();
  let data = await apiOperation(id, 'DELETE')
   console.log(data) //null
}



