
export type CityWeather = {
    main: string,
    description: string,
    icon: string
}

export type WeatherData = {
    base: string,
    main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number
    },
    name: string,
    sys: {
        sunrise: number,
        sunset: number
    },
    visibility: number,
    weather: Array<CityWeather>,
    wind: {
        speed: number
    }
}