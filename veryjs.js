let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let veryDate = document.querySelector("#rightDate");
veryDate.innerHTML = ` ${day} ${hour}.${minutes}`;
function weatherForecast(coordinates) {
  let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
};
function currentTemperature(response) {
  let temperatureElement = document.querySelector("#rightTemp");
  celsiusTemperature = response.data.main.temp;
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${temperature}`;
  let veryHumidity = document.querySelector("#humidity");
  veryHumidity.innerHTML = `${response.data.main.humidity}%`;
  let veryWind = document.querySelector("#wind");
  veryWind.innerHTML = `${response.data.wind.speed}`
  let veryWeather = document.querySelector("#rain")
  veryWeather.innerHTML = `${response.data.weather[0].main} `;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconElement.setAttribute("alt", response.data.weather[0].main);
  weatherForecast(response.data.coord);
}
function displaytDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  return days[day];
}
function displayForecast(response) {
  let forecast = response.data.daily;
  let textCenter = document.querySelector("#text-center");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML = forecastHTML +
        `<div class="col">
        <span class="cloud">${displaytDay(forecastDay.dt)}</span>
        <br />
        <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" width="42">
        <br />
        ${Math.round(forecastDay.temp.max)}°<br /><span class = "HTMLForecast">${Math.round(forecastDay.temp.min)}°</span>
      </div>`
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  textCenter.innerHTML = forecastHTML;
};
function search(event) {
  event.preventDefault();
  let text = document.querySelector("#veryText");
  let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentTemperature);
  let cities = document.querySelector("#cities");
  cities.innerHTML = `${text.value}`;
}
function fahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureEl = document.querySelector("#rightTemp");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  temperatureEl.innerHTML = Math.round(fahrenheitTemp);
}
function tempCelsius(event) {
  event.preventDefault();
  let temperatureEl = document.querySelector("#rightTemp");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  temperatureEl.innerHTML = Math.round(celsiusTemperature);
}
celsiusTemperature = null;
let form = document.querySelector("form");
form.addEventListener("submit", search);
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", fahrenheitTemperature);
let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", tempCelsius);