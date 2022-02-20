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
      <h3 style={{margin: 0, padding: 0}}>{name}</h3>
      {/* <p>{date}</p> */}
      <div className="iconContainer">
        <i className={`wi ${weatherIcon} display-1`} />
        <p>{temp}</p>
      </div>
      <p style={{margin: 0, padding: 0}}>{conditions}</p>
      <p>L <b>{minTemp}</b> H <b>{maxTemp}</b></p>
    </div>
  )
}
