import React, {useEffect} from 'react';
import WeatherDisplay from "./WeatherDisplay";
import {connect} from "react-redux";
import {getWeatherData, setActivePlace, setWeatherData} from "../../redux/main-reducer";

const WeatherDisplayContainer = (props) => {
    let name = props.places[props.activePlace]

    useEffect(() => {
        props.getWeatherData(name)
    }, [])

    let onChange = (activePlace) => {
        props.setActivePlace(activePlace)
        name = props.places[activePlace]
        props.getWeatherData(name)

    }
    return <WeatherDisplay
            places={props.places}
            weatherData={props.weatherData}
            onChange={onChange}

        />
}

let mapStateToProps = (state) => ({
    weatherData: state.main.weatherData,
    places: state.main.places,
    activePlace: state.main.activePlace
})


export default connect(mapStateToProps, {setWeatherData, setActivePlace, getWeatherData})(WeatherDisplayContainer)