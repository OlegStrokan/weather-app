import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import StartContainer from "./component/Start/StartContainer";
import Login from "./component/Login/Login";

const App = () => {
    return <div className='app-wrapper'>
        <Route exact path='/'
               render={ () => <StartContainer /> }/>
            <Route path='/users'
                   render={ () => <UsersContainer /> }/>
        <Route path='/profile/:userId?'
               render={() => <ProfileContainer/>}/>
        <Route path='/login'
               render={ () => <Login /> }/>
    </div>
}

export default App;