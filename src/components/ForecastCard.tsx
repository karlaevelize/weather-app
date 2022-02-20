type WeatherCardProps = {
  name?: string
  conditions: string
  temp: number
  minTemp: number
  maxTemp: number
  feelsLike?: number
  weatherIcon: string
  date?: string
}

export const ForecastCard = ({ name, conditions, temp, minTemp, maxTemp, feelsLike, weatherIcon, date }: WeatherCardProps) => {

  return (
    <div className="forecastContainer">
      <h3>{name}</h3>
      <p>{date}</p>
      <div style={{width: 50, height: 30, textAlign: "center"}}>
      <i className={`wi ${weatherIcon} display-0`} />
      </div>
      <p>{temp}</p>
      <p>{conditions}</p>
      {/* <p>L <b>{minTemp}</b> H <b>{maxTemp}</b></p> */}
    </div>
  )
}