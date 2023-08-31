const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector(".searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temp = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidityValue = document.getElementById("humidity-value");
const windValue = document.getElementById("wind-value");

async function checkWeather(city) {
  const api_key = "4e3e22861d59c5931b50082d9eecadb3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );
  console.log(weather_data);

  const weatherBody = document.querySelector(".weather-body");
  const html = `
  <img src="images/${
    weather_data.weather[0].main
  }.png" class="weather-img" alt="" />
        <div class="weather-box">
          <p class="temperature">${(weather_data.main.temp - 273).toFixed(
            1
          )} <sup>°C</sup></p>
          <p class="description">${weather_data.weather[0].main}</p>
        </div>
        <div class="weather-details">
          <div class="humidity">
            <i class="fa fa-tint" aria-hidden="true"></i>
            <div class="text">
              <span id="humidity-value">${weather_data.main.humidity}</span>
              <p>Humidity</p>
            </div>
          </div>
          <div class="wind-speed">
            <i class="fa fa-wind"></i>
            <div class="text">
              <span id="wind-value">${weather_data.wind.speed} km/h</span>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
  `;

  weatherBody.insertAdjacentHTML("beforebegin", html);
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
