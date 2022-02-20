import axios from "axios"
import { useEffect, useState } from "react"
import { fetchWeather, getWeatherIcon } from "../functions"
import { WeatherCard } from "./WeatherCard"
import { ForecastCard } from "./ForecastCard"

type typeCity = {
  name: string
  conditions: string
  weather: {
    main: string;
    id: number;
  }[]
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
  }
}

type typeForecast = {

}[]

export const WeatherDashboard = () => {

  const [ search, setSearch ] = useState<string>("")
  const [ cityWeather, setCityWeather ] = useState<typeCity | undefined>()
  const [ forecast, setForecast] = useState<typeForecast | undefined>()

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    fetchWeather(search, setCityWeather, setForecast)
    setSearch("")
  }

  console.log("city", cityWeather)
  console.log("forecast", forecast)

  const icons = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-storm-showers",
    Snow: "wi-snow",
    Atmosphere: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  }

  return (
    <div>
      <div className="titleContainer">
        <h1>Weather </h1>
        <form onSubmit={submit}>
          <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </form>
      </div>
      {cityWeather && 
        <WeatherCard 
          name={cityWeather.name}
          conditions={cityWeather.weather[0].main}
          temp={Math.round(cityWeather.main.temp - 273.15)}
          minTemp={Math.round(cityWeather.main.temp_min - 273.15)}
          maxTemp={Math.round(cityWeather.main.temp_max - 273.15)}
          feelsLike={Math.round(cityWeather.main.feels_like - 273.15)}
          weatherIcon={getWeatherIcon(icons, cityWeather.weather[0].id)}
        />
      }
      {forecast && forecast.slice(1).map(day => (
          <ForecastCard
            date={new Date(day.dt * 1000).toLocaleDateString('en-GB', { weekday: 'long', month: 'long', day: 'numeric' })}
            conditions={day.weather[0].main}
            temp={Math.round(day.dew_point - 273.15)}
            minTemp={Math.round(day.temp.min - 273.15)}
            maxTemp={Math.round(day.temp.max - 273.15)}
            weatherIcon={getWeatherIcon(icons, day.weather[0].id)}
          />)
        )
      }
    </div>
  )
}