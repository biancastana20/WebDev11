

document.addEventListener("DOMContentLoaded", () => {
  displayCartItem()
  //----------------------------------------- INITIALIZARE CART IN LOCAL ST----------------------------------------------
  //VERIFICARE daca exista deja in local storage: 
  let cart = localStorage.getItem('cart')
  //daca nu exista:
  if (!cart) {
    localStorage.setItem('cart', JSON.stringify({
      products: [],
      total: 0,
      productsNr: 0,
      transportTotal: 0
    })
    )
  }
});
//---------------------------------------------START ADD IN LOCAL STORRAGE------------------------------------------------

async function addToChart(id) {
  const succesMessage = document.querySelector('.details-hidden-banner')
  let quantity = +document.getElementById('details-book-quantity').value//(+) - unary opperator can convert strng to nr
  let data = await apiOperation(id, 'GET')
      let cart = JSON.parse(localStorage.getItem('cart')) // luam cartul din localstorage  
      let bookAlreadyInCart = cart.products.find(function (el) { return el.id == id }) //verificam daca book ul pe care vrem sa facem entry in cart deja exista in cart
      // console.log(alreadyInCart)  // obiectul book cu id gasit - fctia find la true returneaza primul element gasit/in cart tot timpil vom avea 1 sg elem cu acelasi id
      let entry = {
        id: id,
        path: data.path,
        title: data.title,
        author: data.author,
        quantity: quantity,
        unitPrice: data.price,
        subTotal: Math.round(+data.price * quantity * 100) / 100 //math.round(2.5) = 2 ...math.round(2.5)*100/100 =2.5
      }
      //console.log(entry) //obiectul book
      if (bookAlreadyInCart) {
        cart.products = cart.products.map(el => {
          if (el.id == bookAlreadyInCart.id) {
            el.quantity += entry.quantity
            el.subTotal += entry.subTotal
          }
          return el
        })
      } else {
        // daca nu aveam in cart, il adaugam pur si simplu in array ul de produse din cart
        cart.products.push(entry)
      }
      updateCart(cart)
      succesMessage.style.visibility = 'visible'
      setTimeout(() => succesMessage.style.visibility = 'hidden', 2000)
    }

//--------------------------------------------- START ADD SHOPPING CART PAGE------------------------------------
let containerCart = document.getElementById("cart-books")
console.log(containerCart)
let cartInfo = document.querySelector(".cart-info")

function displayCartItem() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  //console.log(cart)
  if (cart) {
    cart.products.map((product) => {
      containerCart.innerHTML += `
              <tr id='${product.id}'>
                  <td> <img src="${product.path}" alt="book" class="admin-book-img"></td>
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
                    <button id="op" onclick = "setQuantity('${product.id}','-')">-</button>
                    <input class = "details-book-quantity"id="details-book-quantity-${product.id}" value= "${product.quantity}" >
                    <button id="op" onclick = "setQuantity('${product.id}','+')">+</button>
                 </td>
                  <td>
                      <p id="subtotal-${product.id}">$${product.subTotal}</p>
                  </td>
                  <td>
                    <a href="#" id="btn-remove-book" onclick="deleteBookFromCart('${product.id}')">Remove</a>
                  </td>
              </tr>`

      cartInfo.innerHTML = `
              <p id = "productsNr">Products: ${cart.productsNr}</p>
              <p id ="transport-total">Total transport: $${cart.transportTotal}</p>
              <h1 id="total">Total: $${cart.total} </h1>
              <button id="cart-btn">Buy book</button> `
    })
  } else {
    console.log("Error, cart doesn't exist!")
  }
}

function deleteBookFromCart(id) {
  document.getElementById(`${id}`).remove(); //sterge din html
  const cart = JSON.parse(localStorage.getItem('cart'));

  let cartProducts = cart.products
  //let findObj = cartProducts.find(function (el) { return el.id == id })
  //cartProducts = cartProducts.splice(cartProducts.indexOf(findObj), 1) // splice(a,b) a-start de unde sa stearga, b cate elemente
  cart.products = cart.products.filter(function(el) { return el.id != id; });  //va returna array cu elementele diferite de id
  updateCart(cart)
  document.getElementById('total').innerHTML = `Total: ${cart.total}`
  document.getElementById("productsNr").innerHTML = ` ProductsNr: ${cart.productsNr}`
}


function setQuantity(id, operation) {
  //get cart from LS
  let cart = JSON.parse(localStorage.getItem('cart'));
  //modify quantity
   cart.products=cart.products.map((el) => {
    if (el.id == id) {
      if (operation === '+') {
        el.quantity++;
      }
      else if (operation === '-') {
        el.quantity--;
      }
      el.subTotal = Math.round(+el.unitPrice * el.quantity * 100) / 100
      document.getElementById('details-book-quantity-' + id).value = el.quantity
      document.getElementById('subtotal-' + id).innerHTML =`$${el.subTotal}` 
      //console.log(el)
    }
    return el
  })
  
  cart = updateCart(cart)

  document.getElementById('total').innerHTML = `Total: $${cart.total}`
  document.getElementById("productsNr").innerHTML = ` ProductsNr: $${cart.productsNr}`
  document.getElementById("transport-total").innerHTML = `Total transport: $${cart.transportTotal}`

}

function updateCart(cart) {
  //update total
  let total = cart.products.reduce((acc, curr) => {
    return acc = acc + curr.subTotal
  }, 0) //initializam acc=0
  cart.total = Math.round(total * 100) / 100
  // console.log(total)

  //NR of products from cart
  let productsNr = cart.products.reduce((acc, curr) => {
    return acc = acc + curr.quantity
  }, 0) //initializam acc=0
  cart.productsNr = productsNr

  //update total tranport
  if (cart.total >= 50) {
    cart.transportTotal = 0;
  }
  else {
    cart.transportTotal = 20;
  }
  localStorage.setItem('cart', JSON.stringify(cart))
  return cart
}