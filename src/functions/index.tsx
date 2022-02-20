import axios from "axios"

export const fetchWeather = async (cityName: string, setter: Function, forecast: Function) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8c9994a494a67a07a74db2d8d543a27b`)
  setter(response.data)
  const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=52.374&lon=4.8897&exclude=hourly,minutely&appid=8c9994a494a67a07a74db2d8d543a27b`)
  forecast(forecastResponse.data.daily)
}

export const getWeatherIcon = (icons: any, iconId: number) => {
  switch (true) {
    case iconId >= 200 && iconId < 232:
      return icons.Thunderstorm
    case iconId >= 300 && iconId <= 321:
      return icons.Drizzle
    case iconId >= 500 && iconId <= 521:
      return icons.Rain
    case iconId >= 600 && iconId <= 622:
      return icons.Snow
    case iconId >= 701 && iconId <= 781:
      return icons.Atmosphere
    case iconId === 800:
      return icons.Clear
    case iconId >= 801 && iconId <= 804:
      return icons.Clouds
    default:
      return icons.Clouds
  }
}
