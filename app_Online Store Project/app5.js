//------------------- ----------------------- VARIABLES DECLARATION----------------------------------------------
const containerBooks = document.getElementById('center-books');
const detailsBook = document.getElementById('details-book-container');
const tableAdmin = document.getElementById('table-books');
const bookFiltered = document.getElementById('books-filtered')
//---------------------------------------------- API FROM FIREBASE ------------------------------------------------
const BOOKS_URL =
  "https://online-shop-for-books.firebaseio.com/books.json";
const BOOKS_ITEM_URL =
  "https://online-shop-for-books.firebaseio.com/books/";


//------------------------------------------------------START LINK ALL PAGES -----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const books = new Book()

  // la intrarea in shop verificam daca avem cart in localStorage
  let cart = localStorage.getItem('cart') //daca exista deja in local storage nu mai face codul de mai jos (utilizatorul a intrat cel putin odata)
  if (!cart) { // daca nu exista cart in localStorage il setam 
    localStorage.setItem('cart', JSON.stringify({
      products: [],
      total: 0
    })
    )}
  // console.log(window)
  // console.log(window.location);
  if (window.location.href.indexOf("index.html") >= 0) {
    //daca pozitia indexului gasit e > 0 altfel returneaza -1
    ui.getBooks();
    ui.filterBtn();
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
  if (window.location.href.indexOf("cart.html") >= 0) {
    getCart();
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

class UI {
  //---------------------------------------- START LIST OF PRODUCTS --------------------------------------------------
  getBooks() {
    fetch(BOOKS_URL, {
      method: 'GET'
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        //console.log(data) //=> un obiect de obiecte
        let ids = Object.keys(data); // ['0','1','2' .....'-MK9pu7lhj89ySrYFstC']
        // containerBooks.innerHTML = ""
        ids.forEach(function (key) {
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
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  //---------------------------------------------- END  LIST OF PRODUCTS ---------------------------------------------

  //----------------------------------- ----------- SEARCH BOOK BY TITLE -----------------------------------------------
  findBook(title) {
    fetch(BOOKS_URL)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
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
    </article>          
                      `;
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  filterBtn() {
    const searchBookBtn = document.getElementById('nav-button-search-book')
    const inputTitle = document.getElementById('nav-search-book')

    searchBookBtn.addEventListener("click", (e) => {
      e.preventDefault(); // eliminam comportamentul default al butonului de tip submit (afiseaza 1,2 sec)
      if (!(inputTitle.value)) {
        alert("Please add a book title!");

      } else {
        this.findBook(inputTitle.value);
      }
    });
  }
  //----------------------------------- ----------- END SEARCH BOOK BY TITLE -----------------------------------------------

  //---------------------------------------------- START DETAILS PAGE ------------------------------------------------
  // details button event from (index.html) --> details.html
  showDetailsBook(id) {
    fetch(BOOKS_ITEM_URL + id + '.json') //id = 0 1 2 ..... -MKokWAPUCmGuB5
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        //console.log(data);
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
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  //------------------------------------------------ ------END DETAILS PAGE ------------------------------------------

  //------------------------- ---------------------- START ADMIN PAGE WITH LIST OF PRODUCTS --------------------------
  managebooks() {
    fetch(BOOKS_URL)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        //console.log(data);
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
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  //---------------------------------------------- END ADMIN PAGE WITH LIST OF PRODUCTS-------------------------------


  //-------------------------------------------------------  ADD NEW BOOK button ---------------------------------------
  addNewBook() {
    document.getElementById("header-btn-add-new-book").addEventListener("click", () => {
      document.getElementById("product-management-container").style.display = "none"
      document.getElementById("add-new-book-container").style.visibility = "visible"
    })
    // --------------------------------- ------------- START SAVE BOOK BUTTON --> POST METHOD --------------------------
    const addBookId = document.getElementById("book-id")
    const addImageBook = document.getElementById("image")
    const addTitleBook = document.getElementById("title")
    const addAuthorBook = document.getElementById("author")
    const addPriceBook = document.getElementById("price")
    const addDescriptionBook = document.getElementById("description")
    const addQuantityBook = document.getElementById("quantity")

    document.getElementById("header-btn-save-book").addEventListener("click", () => {
      const ui = new UI();
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
      //console.log(newBook)  // {....}
      fetch(BOOKS_URL, {
        method: 'POST',
        body: JSON.stringify(newBook)
      })
        .then(function (res) {
          res.json();
          // location.reload();
          ui.managebooks()
        })
        .catch(function (err) {
          console.log(err);
        });

      document.getElementById("product-management-container").style.display = "block"
      document.getElementById("add-new-book-container").style.visibility = "hidden"
    })
  }
  //------------------------ -----------------------------END ADD NEW BOOK button -------------------------------------------
}

//-------------------------------------------   DELETE from ADMIN --------------------------------------
function deleteBook(id) {
  document.getElementById(`${id}`).remove();
  fetch(BOOKS_ITEM_URL + id + '.json', {
    method: 'DELETE'
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

//---------------------------------------------START ADD IN LOCAL STORRAGE------------------------------------------------

function addToChart(id) {
  const succesMessage = document.querySelector('.details-hidden-banner')
  const quantity = +document.getElementById('details-book-quantity').value //(+) - unary opperator can convert strng to nr
  
  fetch(BOOKS_ITEM_URL + id + '.json')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let cart = JSON.parse(localStorage.getItem('cart')) // luam cartul din localstorage  
      let alreadyInCart = cart.products.find(function(el){return el.id == id})//verificam daca book ul pe care vrem sa facem entry in cart deja exista in cart
     // console.log(alreadyInCart)  // obiectul book cu id gasit - fctia find la true returneaza primul element gasit //in cart tot timpil vom avea 1 sg elem cu acelasi id
      let entry = { //formam entry-ul
        id: id,
        img: data.path,
        title: data.title,
        author:data.author,
        quantity: quantity,
        unitPrice: data.price,
        subTotal: Math.round(+data.price * quantity * 100) / 100 //math.round(2.5) = 2 ...math.round(2.5)*100/100 =2.5
      }
      //console.log(entry)
  
      if (alreadyInCart) {
        /* 
          daca deja exista, parcurgem arrayul de products din cart
          la elementul care deja exista in cart adaugam cantitatea si facem update la subtotal
          pe restul le lasam asa cum sunt
        */
        cart.products = cart.products.map(el => {
          if (el.id == alreadyInCart.id) {
            el.quantity += entry.quantity
            el.subTotal += entry.subTotal
          }
          return el
        })
      } else {
        // daca nu aveam in cart, il adaugam pur si simplu in array ul de produse din cart
        cart.products.push(entry)
      }
      // facem update la total
      // cart.total = Math.round(cart.products.reduce((acc, curr) => acc += curr.subTotal, 0) * 100) / 100
      let total = cart.products.reduce((acc, curr) => {
        return acc = acc + curr.subTotal
       }, 0) //initializam acc=0
      cart.total = Math.round(total * 100) / 100
      
      //setam in localStorage cart 
      localStorage.setItem('cart', JSON.stringify(cart))

      succesMessage.style.visibility = 'visible'
      setTimeout(() => succesMessage.style.visibility = 'hidden', 2000)
    })
}

//-------------------------------- START ADD IN SHOPPING CART PAGE-------------------
function getCart(){
  let containerCart=document.getElementById("cart-books")
  console.log(containerCart)
  const cart = JSON.parse(localStorage.getItem('cart'));
  console.log(cart)
  if (cart) {
    // console.log(cart.products[0].id)
    cart.products.map ((product) =>{
    containerCart.innerHTML+=`
            <td>
            <img src="${product.img}" alt="book" class="admin-book-img">
            </td> 
            <td>
                  <div class="title-book">
                    <a href="details.html?id=${product.id}" class="title-details-btn">${product.title}</a>
                      <p>${product.author}</p>
                  </div>
              </td>
              <td>
                  <h5 class="admin-book-price">$${product.unitPrice}</h5>
              </td>
              <td>
                <button id="btn-op-plus">-</button>
                <input type="number" id="details-book-quantity" value= "${product.quantity}">
                <button id="btn-op-plus">+</button>
              </td>
              <td>
                  <p>${product.subTotal}</p>
              </td>
              <td>
                <a href="#" id="btn-remove-book" onclick="deleteBookFromCart('${product.id}')">Remove</a>
              </td>
            </tr>`
           })

  } else {
    console.log("error")
  }
}

