import {dataAPI} from "../api/api";
import {WeatherData} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

const initialState = {
    weatherData: null as WeatherData | null,
    places: ['London','Prague'] as Array<string>,
    activePlace: 0,
}

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

const mainReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) {
        case 'SET_WEATHER_DATA': {
            return { ...state, weatherData: action.weatherData}
        }
        case 'SET_ACTIVE_PLACE': {
            return { ...state, activePlace: action.activePlace}
        }
        case 'SET_NEW_PLACE': {
            return {...state, places: [...state.places, action.newPlace]}
        }
        default: return state
    }
}


export const actions = {
    setWeatherData: (weatherData: WeatherData) => ({type: 'SET_WEATHER_DATA', weatherData} as const),
    setActivePlace: (activePlace: number) => ({type: 'SET_ACTIVE_PLACE', activePlace} as const),
    setNewPlace: (newPlace: string) => ({type: 'SET_NEW_PLACE', newPlace} as const)
}
export const getWeatherData = (name: string): ThunkType => (dispatch) => {
    dataAPI.getWeatherData(name).then(response => {
        dispatch(actions.setWeatherData(response))
    })
}


export default mainReducer