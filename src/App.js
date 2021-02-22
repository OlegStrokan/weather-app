import React from 'react';
import './App.css';
import WeatherNav from "./components/WeatherDisplay/WeatherDisplayContainer";

const places = ["London", "Moscow", "Kiev", "Minsk"];

const App = () => {
return <div>
    <WeatherNav/>
</div>

}

export default App