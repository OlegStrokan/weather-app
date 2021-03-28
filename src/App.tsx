import React from 'react';
import {Route} from 'react-router-dom';
import WeatherDisplayContainer from "./components/WeatherDisplay/WeatherDisplayContainer";
import Documentation from "./components/Documentation/Documentation";

const App = () => {
    return <div>
        <Route exact path={'/'} render={() => <Documentation/>}/>
        <Route path={'/main'} render={() => <WeatherDisplayContainer/>}/>
    </div>

}

export default App