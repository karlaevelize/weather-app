import axios from "axios"

export const fetchWeather = async (cityName: string) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8c9994a494a67a07a74db2d8d543a27b`)
  console.log("response", response)
}
