let weather = [
  {
    name: "paris",
    temp: 12,
    humidity: 53
  },
  {
    name: "london",
    temp: 17,
    humidity: 21
  },
  {
    name: "warsaw",
    temp: 32,
    humidity: 76
  },
  {
    name: "seoul",
    temp: 46,
    humidity: 1
  },
  {
    name: "riga",
    temp: 1,
    humidity: 60
  }
];
let cities = prompt("Enter a city");
cities = cities.trim();
cities = cities.toLowerCase();
if (cities === weather[0].name) {
  alert(
    "It is currently " +
      weather[0].temp +
      "°C in Paris with a humidity of " +
      weather[0].humidity +
      "%"
  );
} else if (cities === weather[1].name) {
  alert(
    "It is currently " +
      weather[1].temp +
      "°C in London with a humidity of " +
      weather[1].humidity +
      "%"
  );
} else if (cities === weather[2].name) {
  alert(
    "It is currently " +
      weather[2].temp +
      "°C in Warsaw with a humidity of " +
      weather[2].humidity +
      "%"
  );
} else if (cities === weather[3].name) {
  alert(
    "It is currently " +
      weather[3].temp +
      "°C in Seoul with a humidity of " +
      weather[3].humidity +
      "%"
  );
} else if (cities === weather[4].name) {
  alert(
    "It is currently " +
      weather[4].temp +
      "°C in Riga with a humidity of " +
      weather[4].humidity +
      "%"
  );
} else {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
      cities
  );
}
