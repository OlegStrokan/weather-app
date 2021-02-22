import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import mainReducer from "./main-reducer";

let reducers = combineReducers({
    mainPage: mainReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware))

window.store = store

export default store