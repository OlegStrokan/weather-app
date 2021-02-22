import axios from "axios";

export const dataAPI = {
    getWeatherData(name) {
       return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&lang=ru&units=metric&appid=55598e00e9fc9fb8f3777e1dd9e2aef8`)
            .then(response => response.data)
    }
}
