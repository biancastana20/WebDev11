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
const mapElem = document.getElementById('map');
const icon = document.getElementById("icon");
const weatherForecast = document.getElementById("weather-forecast-info")
const URL_CURRENT_WEATHER =
  "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
const URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/";
const URL_FORECAST_WEATHER =
  "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

btnWeather.addEventListener("click", () => showWeather());

function showWeather() {
  // console.log("click");
  // console.log(input.value);
  if (input.value) {
    fetch(URL_CURRENT_WEATHER + input.value)
      .then(function (res) {
        //it will be rezolved with response object
        // console.log(res.json()); //another promise
        // console.log(res);
        return res.json(); //.json is one of the response method - takes the response stream and returns a promise that resolves with the result of parsing the body text as JSON.
      })
      .then(function (data) {
        //to get the data from the API we need another .then that will be resolved with the data that is read and parse.
        // console.log(data);

        city.innerHTML = `City: 
          ${input.value}
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

        let mapPropert = {
          center: new google.maps.LatLng(data.coord.lat, data.coord.lon),
          zoom: 5,
        }; //where to center the map
        let map = new google.maps.Map(mapElem, mapPropert); //creates a new map inside the <div> element with id="map"
      }) // promise pending
      .catch(function (err) {
        console.log(err);
      });
  } else {
    input.style.borderColor = "red"
  }

}


btnForecast.addEventListener("click", showPrognosis);

function showPrognosis() {
  if (input.value) {
    fetch(URL_FORECAST_WEATHER + input.value)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data)
        const groupedByDay = data.list.reduce((groupeDays, current) => {
          //current = este fiecare ob din list; list[0]; list[1]...etc
          //groupeDays = {};
          //=>{ dayKey: [{list[0]}], [{list[1]}], [{list[2]}]... }
          let dayKey = current.dt_txt.split(' ')[0] // use day as the key, ia primul element splituit din dt_txt: "2020-09-30 12:00:00"
          //console.log(dayKey) //day title - 30/09/2020, 01/10/2020 ....
          let elements = groupeDays[dayKey] || [] //groupeDays[dayKey] elementele keyii (zilei) exista in {} ? daca nu fa un arr gol in care bagam dupa obiectele keyii
          //console.log(elements) // [], [{}], [{},{}]..
          elements.push(current) // [{list[0]}], unde gaseste dayKey la fel adauga aici,unde nu face alt array gol cu alta cheie
          groupeDays[dayKey] = elements
          return groupeDays
          //console.log(groupeDays)
        }, {}) //set initial value of groupeDay to be an obj
        //parcurgerea unui ob prin chei
        // Object.keys(groupedByDay).map(key => {
        //   console.log(groupedByDay[key])
        //   //array cu obiectele pe zile
        // })
        // console.log(groupedByDay)
        // console.log(groupedByDay)

        // let id = Object.keys(groupedByDay)
        // console.log(id)
        // weatherForecast.innerHTML = ''

        Object.keys(groupedByDay).map(key => {
          let id = Object.keys(groupedByDay)
          id.forEach(function (idd) {

            weatherForecast.innerHTML += `
          
             <div id = "day">
                <p id = "day-info">Ziua: ${key}</p>

            </div>
            <br>
       `;
          })
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}