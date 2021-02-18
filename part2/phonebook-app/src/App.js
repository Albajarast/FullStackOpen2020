import React, { useEffect, useState } from 'react'
import FilterName from './components/FilterName'
import PersonForm from './components/PersonForm'
import ContactsList from './components/ContactsList'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newSearch, setNewSearch] = useState('')

  const fetchData = () => {
    personService.getAll().then((response) => {
      setPersons(response)
    })
  }

  useEffect(fetchData, [])

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  )

  const personsToShow = newSearch === undefined ? persons : filteredPersons

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterName newSearch={newSearch} setNewSearch={setNewSearch} />
      <h3>Add a new contact</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <ContactsList persons={personsToShow} setPersons={setPersons} />
    </div>
  )
}

export default App
