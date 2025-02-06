import { useState, useEffect } from "react";

// API Key for OpenWeatherMap (get it from https://openweathermap.org/api)
const API_KEY = "your_api_key_here";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=city_name&appid=" + API_KEY;

const WeatherData = () => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
      })
      .catch(error => {
        console.error("Error fetching weather data: ", error);
      });
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Rain: {weather.rain ? weather.rain["1h"] : "No rain"}</p>
    </div>
  );
};

export default WeatherData;
