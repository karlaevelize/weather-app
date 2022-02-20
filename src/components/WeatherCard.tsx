type WeatherCardProps = {
  name: string
  conditions: string
  temp: number
  minTemp: number
  maxTemp: number
  feelsLike: number
}

export const WeatherCard = ({ name, conditions, temp, minTemp, maxTemp, feelsLike }: WeatherCardProps) => {

  return (
    <div>
      <h3>{name}</h3>
      <p>{conditions}</p>
      <p>{temp}</p>
      <p>min: <b>{minTemp}</b>, max: <b>{maxTemp}</b>, feels like: <b>{feelsLike}</b></p>
    </div>
  )
}
