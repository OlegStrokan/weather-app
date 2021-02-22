import {dataAPI} from "../api/api";

const SET_WEATHER_DATA = 'SET_WEATHER_DATA'
const SET_ACTIVE_PLACE = 'SET_ACTIVE_PLACE'

let initialState = {
    weatherData: null,
    places: ['London', 'Minsk', 'Moscow', 'Kiev', 'Japan'],
    activePlace: 0,
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WEATHER_DATA: {
            return { ...state, weatherData: action.weatherData}
        }
        case SET_ACTIVE_PLACE: {
            return { ...state, activePlace: action.activePlace}
        }
        default: return state
    }
}

export const setWeatherData = (weatherData) => ({type: SET_WEATHER_DATA, weatherData})
export const setActivePlace = (activePlace) => ({type: SET_ACTIVE_PLACE, activePlace})

export const getWeatherData = (name) => (dispatch) => {
         dataAPI.getWeatherData(name).then(response => {
             dispatch(setWeatherData(response))
        })
}


export default mainReducer