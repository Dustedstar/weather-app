// Project baraye company Pors
// API az website https://openweathermap.org/ gerefte shode

const apiKey = "5a4c147c60bef9fd79f0b95e086524db";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// ---------------------- Baraye behtar shodane UX eventListener ezafe shode; age Enter zadan to searchbox searcheshon anjam beshe va niaze be zadane dokme ba mouse nabashe
const submitInput = () => {
  checkWeather(searchBox.value);
};

searchBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    checkWeather(searchBox.value);
  }
});
// ----------------------

// Async function baraye daryaft data az API
async function checkWeather(city) {
  const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (respone.status == 404) {
    document.querySelector(".error").style.display = "block";
  }
  if (respone.status == 404) {
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await respone.json();

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML =
      Math.round(data.main.humidity) + "%";

    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "images/mist.png";
        break;
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
