import React from 'react';

const WeatherDisplay = (props) => {
    const weatherData = props.weatherData
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
          {props.places.map((place, index) => (
              <button
                  key={index}
                  onClick={() => {props.onChange(index)}}>
                  {place}</button>
          ))}
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Current: {weatherData.main.temp}°С</p>
        <p>High: {weatherData.main.temp_max}°С</p>
        <p>Low: {weatherData.main.temp_min}°С</p>
        <p>Wind Speed: {weatherData.wind.speed} м/с</p>
      </div>
    );
}

export default WeatherDisplay