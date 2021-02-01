import React from 'react'

const Total = ({ course }) => {
  const sum = course.parts
    .map((part) => part.exercises)
    .reduce((sum, partial) => sum + partial)

  return <strong>Total Number of exercises: {sum}</strong>
}

export default Total
