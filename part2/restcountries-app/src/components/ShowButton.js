import { useState } from 'react'
import Country from './Country'

const ShowButton = ({ country }) => {
  const [showCountry, setShowCountry] = useState(false)
  const handleClick = (e) => {
    setShowCountry(!showCountry)
  }

  return (
    <div>
      {showCountry ? (
        <>
          <button onClick={handleClick}>Hide data</button>
          <Country country={country} />
        </>
      ) : (
        <button onClick={handleClick}>Show data</button>
      )}
    </div>
  )
}

export default ShowButton
