import axios from 'axios'
import { useState, useEffect } from 'react'
import Display from './components/Display'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const fetchCountriesData = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data)
    })
  }

  useEffect(fetchCountriesData, [])

  const filteredCountries =
    countries !== undefined
      ? countries.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        )
      : countries

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <label htmlFor="search">Search Country</label>
      <input id="search" onChange={handleSearchChange} autoComplete="off" />
      <Display countries={filteredCountries} search={search} />
    </div>
  )
}

export default App
