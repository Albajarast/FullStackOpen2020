import React from 'react'

const WeatherDisplay = ({ weather, country }) => {
  const icon_url = weather.weather_icons ? weather.weather_icons[0] : ''

  return (
    <div>
      <h3>Current Weather in {country.capital}:</h3>
      <p>{weather.weather_descriptions}</p>
      <img src={icon_url}></img>
      <p>
        <strong>Temperature: </strong>
        {weather.temperature}°C
      </p>
      <p>
        <strong>Wind: </strong>
        {weather.temperature} km/h
      </p>
    </div>
  )
}

export default WeatherDisplay
