import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./component/Users/UsersContainer";
import Start from "./component/Start/Start";
import ProfileContainer from "./component/Profile/ProfileContainer";

const App = () => {
    return   <div className='app-wrapper'>
        <Route exact path='/'
               render={ () => <Start /> }/>
            <Route path='/users'
                   render={ () => <UsersContainer /> }/>
        <Route path='/profile/:userId?'
               render={() => <ProfileContainer/>}/>
    </div>
}

export default App;