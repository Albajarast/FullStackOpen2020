import React from 'react'
import Contact from './Contact'

function ContactsList({ persons, setPersons }) {
  return (
    <div>
      {persons.map((person) => (
        <Contact key={person.name} person={person} setPersons={setPersons} />
      ))}
    </div>
  )
}

export default ContactsList
