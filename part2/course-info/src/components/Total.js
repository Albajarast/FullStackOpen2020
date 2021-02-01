import React from 'react'

const Total = ({ course }) => {
  let sum = 0
  for (let part of course.parts) {
    sum += part.exercises
  }
  // const sum =
  //   course.parts[0].exercises +
  //   course.parts[1].exercises +
  //   course.parts[2].exercises
  return <strong>Total Number of exercises: {sum}</strong>
}

export default Total
