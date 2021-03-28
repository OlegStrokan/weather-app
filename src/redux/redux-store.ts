import {Action, applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import mainReducer from "./main-reducer";
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
    main: mainReducer,
    form: formReducer
})

// тип главного редюсера
type RootReducerType = typeof rootReducer

// типизация экшенов
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

// типизация главного стэйта
export type AppStateType = ReturnType<RootReducerType>

// типизация санок
export type BaseThunkType<A extends Action = Action, R = void> = ThunkAction<R, AppStateType, unknown, A>


let store = createStore(rootReducer,applyMiddleware(thunkMiddleware))



export default store