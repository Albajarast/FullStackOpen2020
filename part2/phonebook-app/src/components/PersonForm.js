import React from 'react'

function PersonForm({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber
}) {
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
