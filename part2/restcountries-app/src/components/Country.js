import LanguagesList from './LanguagesList'

const Country = ({ country }) => {
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
    </div>
  )
}

export default Country
