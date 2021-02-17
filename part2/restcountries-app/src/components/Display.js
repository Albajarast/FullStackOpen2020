import Country from './Country'
import ShowButton from './ShowButton'

const Display = ({ countries, search }) => {
  if (search === '') {
    return <p>Please write the name of the country</p>
  } else if (countries.length > 10 && search !== undefined) {
    return (
      <div>
        <p>Too many countries to display</p>
      </div>
    )
  } else if (countries.length > 1) {
    return (
      <div>
        {countries.map((country) => (
          <div key={country.name}>
            <span>{country.name} </span>
            <ShowButton country={country} />
            <br />
          </div>
        ))}
      </div>
    )
  } else if (countries.length === 0) {
    return <p>There is no countries that matches with your search</p>
  } else {
    return (
      <div>
        <Country country={countries[0]} />
      </div>
    )
  }
}

export default Display
