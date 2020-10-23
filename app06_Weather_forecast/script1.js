//---------------------VARIABLES DECLARATION---------------------------------
const input = document.getElementById("input");
const btnWeather = document.getElementById("btnWeather");
const btnForecast = document.getElementById("btnForecast");
const descriere = document.getElementById("desc");
const umiditate = document.getElementById("umd");
const presiune = document.getElementById("pres");
const temp = document.getElementById("temp");
const minimaZilei = document.getElementById("minima");
const maximaZilei = document.getElementById("maxima");
const city = document.getElementById("city");
const mapElem = document.getElementById("map");
const icon = document.getElementById("icon");
const weatherForecast = document.getElementById("weather-forecast-info");
const URL_CURRENT_WEATHER =
  "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
const URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/";
const URL_FORECAST_WEATHER =
  "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";


  //---------------------------------------SHOW WEATHER BUTTON----------------------
btnWeather.addEventListener("click", showWeather);
function showWeather() {
  // console.log("click");
  // console.log(input.value);
  let cityName = input.value;
  if (!cityName) {
    alert("Please add a  City!");
  } else {
    fetch(URL_CURRENT_WEATHER + cityName)
      .then(function (res) {
        //it will be rezolved with response object
        // console.log(res.json()); //another promise
        // console.log(res);
        return res.json(); //.json is one of the response method - takes the response stream and returns a promise that resolves with the result of parsing the body text as JSON.
      })
      .then(function (data) {
        //to get the data from the API we need another .then that will be resolved with the data that is read and parse.
        // console.log(data);
        if (data.list === null) {
          alert("Please add a valid name!")
        } else {
          city.innerHTML = `City: 
          ${cityName}
        `;

          descriere.innerHTML = `Description: 
           ${data.weather[0].description}
      `;
          umiditate.innerHTML = `Humidity: 
          ${data.main.humidity}%
      `;
          presiune.innerHTML = `Pressure: 
        ${data.main.pressure}hPa
      `;
          temp.innerHTML = `
        ${data.main.temp}°C
      `;
          minimaZilei.innerHTML = `Temp min: 
        ${data.main.temp_min}°C
      `;
          maximaZilei.innerHTML = `Temp max: 
        ${data.main.temp_max}°C
      `;
          icon.src = URL_WEATHER_ICON_PREFIX + data.weather[0].icon + ".png";
          //add googleMaps
          let mapPropert = {
            center: new google.maps.LatLng(data.coord.lat, data.coord.lon),
            zoom: 10,
          }; //where to center the map
          let map = new google.maps.Map(mapElem, mapPropert); //creates a new map inside the <div> element with id="map"
        }
      }) // promise pending
      .catch(function (err) {
        console.log(err);
      });
  }
}
//-------------------------------  FORECAST BUTTON FOR WEATHER    -------------------------
btnForecast.addEventListener("click", showPrognosis);
function showPrognosis() {
  if (input.value) {
    input.style.borderColor = "black";
    fetch(URL_FORECAST_WEATHER + input.value)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        weatherForecast.innerHTML = ""; //pt a se reinitializa la fiecare apasare de buton, altfel le pune in continuare la schimbarea orasului
        data.list.forEach(function (elem) {
          let day = elem.dt_txt.split(" ")[0];
          let hour = elem.dt_txt.split(" ")[1];
          weatherForecast.innerHTML += `
          
             <div id = "day">
                <p id = "day-info">Ziua: ${day}</p>
                <img src = "${
                  URL_WEATHER_ICON_PREFIX + elem.weather[0].icon + ".png"
                }"/>
                <p id = "hour-day"> Hour: ${hour}</p>
                <p> Temperature: ${elem.main.temp}°C</p>
                <p> Description: ${elem.weather[0].description}</p>
            </div>
            
       `;
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  } else {
    input.style.borderColor = "red";
  }
}