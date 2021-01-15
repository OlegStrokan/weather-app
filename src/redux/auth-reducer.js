const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA: {
                return {
                    ...state,
                    ...action.data,
                    // когда пришли пользовательськие данные, меняем свойсво Логина на True
                    isAuth: true
                }
        }
        default: return state
    }
}

export const setAuthUserData = (userId,email,login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export default authReducer