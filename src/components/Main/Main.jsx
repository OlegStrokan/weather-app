import React from 'react'
import styles from './Main.module.css'

const Main = (props) => {
    const weatherData = props.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";

    return <div>
        <div className={styles.container}>
            <h1>
                {weather.main} in {weatherData.name}
                <img src={iconUrl} alt={weatherData.description} />
            </h1>
            <p>Current: {weatherData.main.temp}°С</p>
            <p>High: {weatherData.main.temp_max}°С</p>
            <p>Low: {weatherData.main.temp_min}°С</p>
            <p>Wind Speed: {weatherData.wind.speed} м/с</p>
        </div>
        <div className={styles.buttons}>
            {props.cities.map((place, index) => (
                <button key={index} onClick={() => {
                    props.onCityChange(index)
                }}>{place}</button>
            ))}
        </div>

    </div>
}

export default Main