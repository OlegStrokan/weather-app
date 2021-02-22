import React from 'react'
import {connect} from "react-redux";
import {getNewWeatherData, getWeatherData} from "../../redux/main-reducer";
import Main from "./Main";

class MainContainer extends React.Component {
    componentDidMount() {
        this.props.getWeatherData(this.props.cities[0])
    }

    onCityChange(city) {
        this.props.getNewWeatherData(city)
    }

    render() {
        return <Main onCityChange={this.onCityChange}
                     weatherData={this.props.weatherData}
                     cities={this.props.cities}
        />
    }
}

let mapStateToProps = (state) => ({
    weatherData: state.mainPage.weatherData,
    cities: state.mainPage.cities
})

export default connect(mapStateToProps,{getWeatherData, getNewWeatherData})(MainContainer)