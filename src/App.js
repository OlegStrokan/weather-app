import React, {Component} from 'react';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';

const PLACES = ["London", "Moscow", "Kiev", "Minsk"];

export default class App extends Component {
    state = {
        activePlace: 0,
    };

    render() {
        const activePlace = this.state.activePlace;
        return (
            <div className="App">

                {PLACES.map((place, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            this.setState({activePlace: index});
                        }}>
                        {place}
                    </button>
                ))}

                <WeatherDisplay
                    key={activePlace}
                    name={PLACES[activePlace]}/>
            </div>
        );
    }
}