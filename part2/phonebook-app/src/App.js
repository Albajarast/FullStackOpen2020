import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FilterName from './components/FilterName'
import PersonForm from './components/PersonForm'
import ContactsList from './components/ContactsList'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const fetchData = () => {
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log(response.data)
      setPersons(response.data)
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
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <ContactsList persons={personsToShow} />
    </div>
  )
}

export default App
