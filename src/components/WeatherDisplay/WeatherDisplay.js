import React from 'react';
import s from '../../App.module.css'
import {Field, reduxForm} from "redux-form";
import {NavLink} from "react-router-dom";

let AddPlaceForm = (props) => {

    return <form onClick={props.handleSubmit}>
        <Field className={s.input} name='newPlace' component={'input'} placeholder='Enter your city'/>
        <button className={s.button}>Add city</button>
    </form>
}

AddPlaceForm = reduxForm({form: 'addPlace'})(AddPlaceForm)

let WeatherDisplay = (props) => {
    const weatherData = props.weatherData
    if (!weatherData) return <div>Loading...</div>;
    const weather = weatherData.weather[0]
    const iconUrl = 
        "http://openweathermap.org/img/w/" + weather.icon + ".png";


    let sunrise = new Date(weatherData.sys.sunrise * 1000)
    let sunset = new Date(weatherData.sys.sunset * 1000);



    let addPlace = (values) => {
        if (values.newPlace === undefined) {
            return null
        }else{
        props.setNewPlace(values.newPlace)
            }
    }


    return <div className={s.title}>
        <h1>My Weather App</h1>
        <div className={s.back}><NavLink to={'./'}>Back</NavLink></div>
    <div className={s.wrapper}>
        <h2>
          {weather.description} в {weatherData.name}
          <img src={iconUrl} alt={weather.description} />
        </h2>
        <p>Текущая: {weatherData.main.temp}°С</p>  <hr/>
        <p>Чувствуется как: {weatherData.main.feels_like}°С</p>  <hr/>
        <p>Максимальная: {weatherData.main.temp_max}°С</p>  <hr/>
        <p>Минимальная: {weatherData.main.temp_min}°С</p>  <hr/>
        <p>Восход солнца: {sunrise.getHours()+':'+sunrise.getMinutes()}</p>  <hr/>
        <p>Заход солнца: {sunset.getHours()+':'+sunset.getMinutes()}</p>  <hr/>
        <p>Скорость ветра: {weatherData.wind.speed} м/с</p>  <hr/>
        <p>Влажность: {weatherData.main.humidity} %</p>  <hr/>
        <p>Видимость: {weatherData.visibility} м</p>  <hr/>
        <p>Давление: {weatherData.main.pressure} гПа</p>  <hr/>
        {props.places.map((place, index) => (
            <button className={s.button}
                key={index}
                onClick={() => {props.onChange(index)}}>
                {place}</button>
        ))}
        <AddPlaceForm onSubmit={addPlace}/>
      </div>
    </div>
}


export default WeatherDisplay