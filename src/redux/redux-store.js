import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";
import profileReducer from "./profile-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

window.store = store;


export default store;