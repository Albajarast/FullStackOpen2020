import React from 'react'
import Contact from './Contact'

function ContactsList({ persons }) {
  return (
    <div>
      {persons.map((person) => (
        <Contact key={person.name} person={person} />
      ))}
    </div>
  )
}

export default ContactsList
