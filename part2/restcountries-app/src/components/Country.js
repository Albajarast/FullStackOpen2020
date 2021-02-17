import axios from 'axios'
import { useEffect, useState } from 'react'
import LanguagesList from './LanguagesList'
import WeatherDisplay from './WeatherDisplay'

const Country = ({ country }) => {
  const [weather, setWeather] = useState({})

  const fetchCapitalWeather = () => {
    const params = {
      params: {
        access_key: process.env.REACT_APP_WEATHER_API_KEY,
        query: country.capital,
        units: 'm'
      }
    }
    axios
      .get(process.env.REACT_APP_WEATHER_API_URL, params)
      .then((response) => setWeather(response.data.current))
  }

  useEffect(fetchCapitalWeather, [])

  return (
    <div>
      <h3>{country.name}</h3>
      <img src={country.flag} width="250px"></img>
      <p>
        <strong>Capital: </strong>
        {country.capital}
      </p>
      <p>
        <strong>Population: </strong>
        {country.population.toLocaleString('es-ES')}
      </p>
      <h4>Coordinates</h4>
      <ul>
        <li>
          <strong>Latitude:</strong> {country.latlng[0]}
        </li>
        <li>
          <strong>Longitude:</strong> {country.latlng[1]}
        </li>
      </ul>
      <h4>Languages:</h4>
      <LanguagesList languages={country.languages} />

      {weather ? (
        <WeatherDisplay weather={weather} country={country} />
      ) : (
        <p>Sorry we can not load the data</p>
      )}
    </div>
  )
}

export default Country
