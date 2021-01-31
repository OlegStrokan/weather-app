import axios from 'axios'



export const dataAPI = {
    getWeatherData() {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Prague&lang=ru&units=metric&appid=b1b35bba8b434a28a0be2a3e1071ae5b`)
            .then(response => response.data)
    },
    getNewWeatherData(city) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=b1b35bba8b434a28a0be2a3e1071ae5b`)
            .then(response => response.data)
    }
}