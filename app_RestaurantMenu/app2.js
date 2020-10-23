const MENU_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/.json";
const MENU_ITEM_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/menu/";

const tableMenu = document.getElementById("table-menu");
//console.log(tableMenu);
const searchBtn = document.getElementById("search-btn");
//console.log(searchBtn);
const detailMenu = document.getElementById("menu-detail");
//console.log(detailMenu);
const searchIngrBtn = document.getElementById("search-btn");
console.log(searchIngrBtn);
const findProducts = document.getElementById("find-prod-ingreds");
const inputIngred = document.getElementById("search-ingr");

class Product {
  constructor(nume, imagine, ingrediente) {
    // console.log(this);
    this.nume = nume;
    this.imagine = imagine;
    this.ingrediente = ingrediente;
  }
}

class UI {
  getProducts() {
    fetch(MENU_SERVER_URL)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // return data;
        //console.log(data)
        let id = Object.keys(data.menu);
        // console.log(id)
        id.forEach(function (key) {
          let product = new Product(
            data.menu[key].nume,
            data.menu[key].imagine,
            data.menu[key].ingrediente
          );
          tableMenu.innerHTML += `
                       <tr>
                           <td>${data.menu[key].nume}</td>     
                           <td>
                           <img src="${data.menu[key].imagine}">
                       </td>
                       <td>Ingrediente: ${data.menu[key].ingrediente}</td>
                       
                       <td><a href="indexdetails.html?id=${key}" target="_blank">Detalii</a></td>
                       </tr>
                       <br>
                     `;
          console.log();
        });
        //console.log(arr)
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  showDetails(id) {
    fetch(MENU_ITEM_SERVER_URL + id + ".json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.reteta);
        // let product = new Product(data.reteta)
        detailMenu.innerHTML += `<h2>${data.nume}</h2>
                     <img src="${data.imagine}" alt="no image">
                     <h3>Ingrediente: ${data.ingrediente}</h3>
                     <hr>
                     <p><span>Recipe:</span><br><br> ${data.reteta}</p>
                    `;
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  showMapAdress() {
    let mapp = document.querySelector(".map");
    console.log(mapp);
    let coord = {
      lat: 44.4363889,
      lng: 26.0355555,
    };
    // The map, centered
    let map = new google.maps.Map(mapp, {
      zoom: 20,
      center: coord,
    });
    // The marker, positioned
    let marker = new google.maps.Marker({
      position: coord,
      map: mapp,
    });
  }

  findProduct(ingredient) {
    console.log("ceva");
    fetch(MENU_SERVER_URL)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // return data;
        let arr = [];
        //console.log(data)
        let id = Object.keys(data.menu);
        // console.log(id)
        id.forEach(function (key) {
          let product = new Product(
            data.menu[key].nume,
            data.menu[key].imagine,
            data.menu[key].ingrediente
          );
          arr.push(product);
          console.log(arr);
        });
        //filtram prin array arr ingredientele
        const filtered = arr.filter((product) => {
          return product.ingrediente.indexOf(ingredient) >= 0; // sa existe ingredientul pe care il caut, altfel return -1
        });
        //console.log(filtered)
        let keysFiltered = Object.keys(filtered);
        //console.log(keysFiltered)
        findProducts.innerHTML = ""; //se reinitializeaza cu noile valori
        keysFiltered.forEach(function (key) {
          findProducts.innerHTML += `<h2>${filtered[key].nume}</h2>
                         <img src="${filtered[key].imagine}" alt="no image">
                         <p>Ingrediente: ${filtered[key].ingrediente}</p>
                         <hr>
                        `;
          // console.log(arr)
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  // console.log(window)
  // console.log(window.location)
  // console.log(window.location.href)
  if (window.location.href.indexOf("index.html") >= 0) {
    //daca pozitia indexului gasit e >0 ins ca exista
    //href: "file:///E:/WebDev11%20-%20Copy/Session13_AJAX_JSON_API/app_RestaurantMenu/index.html"
    ui.getProducts();
    // ui.findProduct();
  }
  if (window.location.href.indexOf("indexdetails.html") >= 0) {
    //href: "file:///E:/WebDev11%20-%20Copy/Session13_AJAX_JSON_API/app_RestaurantMenu/indexdetails.html?id=1"
    const query = window.location.href.split("?")[1]; //id=1
    const id = query.split("=")[1]; //1
    ui.showDetails(id);
  }
  if (window.location.href.indexOf("contact.html") >= 0) {
    ui.showMapAdress();
  }
});

//filtrare dupa ingredient
searchIngrBtn.addEventListener("click", (e) => {
  e.preventDefault(); // eliminam comportamentul default al butonului de tip submit (afiseaza 1,2 sec)
  let ui = new UI();
  if (inputIngred.value === "") {
    alert("Please add an ingredient!");
  } else {
    ui.findProduct(inputIngred.value);
  }
});
