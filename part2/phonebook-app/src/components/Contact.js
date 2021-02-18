import React from 'react'
import personService from '../services/persons'

const Contact = ({ person, setPersons }) => {
  const deletePerson = (e) => {
    const remove = window.confirm(
      `Do you want to remove ${person.name} from your phonebook?`
    )

    if (remove) {
      personService.deleteById(person.id).then(() => {
        personService.getAll().then((response) => {
          setPersons(response)
        })
      })
    }
  }

  return (
    <div>
      <span>
        {person.name} - {person.number}
      </span>
      <button onClick={deletePerson}>Delete</button>
    </div>
  )
}

export default Contact
