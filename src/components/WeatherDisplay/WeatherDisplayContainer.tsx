import React, {useEffect} from 'react';
import WeatherDisplay from "./WeatherDisplay";
import {connect} from "react-redux";
import {getWeatherData, actions} from "../../redux/main-reducer";
import s from "../../App.module.css";
import {WeatherData} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    weatherData: WeatherData | null,
    places: Array<string>,
    activePlace: number
}

type MapDispatchToPropsType = {
    setWeatherData: (weatherData: WeatherData) => void
    setActivePlace: (activePlace: number) => void
    setNewPlace: (newPlace: string) => void
    getWeatherData: (name: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const WeatherDisplayContainer: React.FC<PropsType> = (props) => {
    let name = props.places[props.activePlace]

    useEffect(() => {
        props.getWeatherData(name)
    }, [])

    let onChange = (activePlace: number) => {
        props.setActivePlace(activePlace)
        name = props.places[activePlace]
        props.getWeatherData(name)
    }


    return <div  className={s.app}>
        <WeatherDisplay
            places={props.places}
            weatherData={props.weatherData}
            onChange={onChange}
            setNewPlace={props.setNewPlace}
        /></div>

}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    weatherData: state.main.weatherData,
    places: state.main.places,
    activePlace: state.main.activePlace
})

let mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        setWeatherData: (weatherData) => {
            dispatch(actions.setWeatherData(weatherData))
        },
        setActivePlace: (activePlace) => {
            dispatch(actions.setActivePlace(activePlace))
        },
        setNewPlace: (newPlace) => {
            dispatch(actions.setNewPlace(newPlace))
        },
        getWeatherData: (name) => {
            dispatch(getWeatherData(name))
        }
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, null, AppStateType>(mapStateToProps, mapDispatchToProps)(WeatherDisplayContainer)