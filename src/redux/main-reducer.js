import {dataAPI} from "../api/api";

const SET_WEATHER_DATA = 'SET_WEATHER_DATA'
const SET_CURRENT_CITY = 'SET_CURRENT_CITY'

let initialState = {
    weatherData: null,
    cities: ['London', 'Moscow', 'Kiev', 'Prague'],
    currentCity: null
}

const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_WEATHER_DATA: {
            return {...state, weatherData: action.weatherData}
        }
        case SET_CURRENT_CITY: {
            return {...state, currentCity: action.currentCity}
        }
        default: return state
    }
}

export const setWeatherData = (weatherData) => ({type: SET_WEATHER_DATA, weatherData})
export const setNewWeatherData = (currentCity) => ({type: SET_CURRENT_CITY, currentCity})


export const getWeatherData = () => {
    return (dispatch) => {
        dataAPI.getWeatherData().then(response => {
            dispatch(setWeatherData(response))
        })
    }
}
export const getNewWeatherData = (city) => {
    return (dispatch) => {
        dataAPI.getNewWeatherData(city).then(response => {
            dispatch(setNewWeatherData(response))
        })
    }
}





export default mainReducer