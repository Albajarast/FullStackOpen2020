import React, { useState } from 'react'
import FilterName from './components/FilterName'
import PersonForm from './components/PersonForm'
import ContactsList from './components/ContactsList'

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
