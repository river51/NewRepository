let now = new Date();
let hour = now.getHours();
let minutes = now.getMinutes();
let days =["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = days[now.getDay()];
let veryDate = document.querySelector("#rightDate");
veryDate.innerHTML = ` ${day} ${hour}.${minutes}`;
function currentTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#rightTemp");
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML =`${temperature}`;
  let veryHumidity = document.querySelector("#humidity");
  veryHumidity.innerHTML = `${response.data.main.humidity}%`;
  let veryWind = document.querySelector("#wind");
  veryWind.innerHTML = `${response.data.wind.speed}`
  let veryWeather = document.querySelector("#rain")
  veryWeather.innerHTML = `${response.data.weather[0].main} `;
}

function search(event){
  event.preventDefault();
  let text = document.querySelector("#veryText");
  let apiKey = "ac6e50a7565f0982770db9ec78177098";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentTemperature);
  let cities = document.querySelector("#cities");
  cities.innerHTML = `${text.value}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", search);









