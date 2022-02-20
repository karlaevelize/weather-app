type WeatherCardProps = {
  name?: string
  conditions: string
  temp: number
  minTemp: number
  maxTemp: number
  weatherIcon: string
  date?: string
}

export const WeatherCard = ({ name, conditions, temp, minTemp, maxTemp, weatherIcon, date }: WeatherCardProps) => {

  return (
    <div className="mainForecast">
      <h3>{name}</h3>
      <p>{date}</p>
      <div className="iconContainer">
        <i className={`wi ${weatherIcon} display-0`} />
        <p>{temp}</p>
      </div>
      <p>{conditions}</p>
      <p>L <b>{minTemp}</b> H <b>{maxTemp}</b></p>
    </div>
  )
}
