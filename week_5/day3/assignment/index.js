const cityInput = document.getElementById("cityInput");
const btnSubmit = document.getElementById("btnSubmit");
const cityWeather = document.getElementById("cityWeather");
const currentLocationWeather = document.getElementById('currentLocationWeather')
const apiKey = 'e58d1190d081f10a3da11806b105613b'


function getCityWeather() {
  let city = cityInput.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayCityWeather(data);
    });
}

function displayCityWeather(data) {
  let weatherInfo = `
    <ul>
    <li>City: ${data.name}</li>
    <li>High: ${data.main.temp_max} F</li>
    <li>Low: ${data.main.temp_min} F</li>
    <li>Pressure: ${data.main.pressure}</li>
    </ul>
    `;
  cityWeather.innerHTML = weatherInfo;
}



function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    currentLocationWeather.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`
  fetch(url)
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        displayCurrentLocationWeather(data)
    })
  
}


function displayCurrentLocationWeather(data) {
    let weatherInfo = `
    <ul>
    <li>City: ${data.name}</li>
    <li>High: ${data.main.temp_max} F</li>
    <li>Low: ${data.main.temp_min} F</li>
    <li>Pressure: ${data.main.pressure}</li>
    </ul>
    `;
    currentLocationWeather.innerHTML = weatherInfo;
}

window.addEventListener('load', function() {
    getLocation()
})

btnSubmit.addEventListener("click", function () {
    getCityWeather();
  });