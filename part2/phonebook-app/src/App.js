import React, { useState } from 'react'
import Contact from './components/Contact'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    const newNameObject = {
      name: newName,
      number: newNumber
    }

    let foundPerson = false
    if (persons.findIndex((person) => person.name === newName) !== -1) {
      foundPerson = true
    }

    if (!foundPerson) {
      setPersons(persons.concat(newNameObject))
      setNewName('')
      setNewNumber('')
    } else {
      setNewName('')
      setNewNumber('')
      alert(`The contact ${newName} already exists in your phonebook`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
    console.log(event.target.value.toLowerCase())
  }

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  )

  const personsToShow = newSearch === undefined ? persons : filteredPersons

  return (
    <div>
      <h2>Phonebook</h2>
      <label htmlFor="search">Filter shown with:</label>
      <input id="search" value={newSearch} onChange={handleSearchChange} />
      <br />
      <br />
      <form onSubmit={addNewName}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <input id="number" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <Contact key={person.name} person={person} />
      ))}
    </div>
  )
}

export default App
