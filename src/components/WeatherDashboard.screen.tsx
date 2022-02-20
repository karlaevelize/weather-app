import axios from "axios"
import { useEffect, useState } from "react"
// import { fetchWeather } from "../functions"
import { WeatherCard } from "./WeatherCard"

type city = {
  name: string
  conditions: string
  weather: {
    main: string;
  }[]
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
  }
}

export const WeatherDashboard = () => {

  const [ search, setSearch ] = useState<string>("")
  const [ cityWeather, setCityWeather ] = useState<city | undefined>()

  const fetchWeather = async (cityName: string) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8c9994a494a67a07a74db2d8d543a27b`)
    setCityWeather(response.data)
  }

  console.log("city weather", cityWeather)

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    fetchWeather(search)
    setSearch("")
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={submit}>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      </form>
      {cityWeather && 
        <WeatherCard 
          name={cityWeather.name}
          conditions={cityWeather.weather[0].main}
          temp={cityWeather.main.temp}
          minTemp={cityWeather.main.temp_min}
          maxTemp={cityWeather.main.temp_max}
          feelsLike={cityWeather.main.feels_like}
        />
      }
    </div>
  )
}