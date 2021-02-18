import axios from 'axios'
import React, { useState } from 'react'
import personService from '../services/persons'

function PersonForm({ persons, setPersons }) {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    let foundPerson = false
    if (persons.findIndex((person) => person.name === newName) !== -1) {
      foundPerson = true
    }

    if (!foundPerson) {
      personService.create(newPerson).then((response) => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
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

  return (
    <div>
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
    </div>
  )
}

export default PersonForm
