import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const { anecdotes } = props
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(createVotesFor(anecdotes))

  const getHigherVotedQuoteIndex = (votes) => {
    let index = 0
    for (let keyIndex in votes) {
      if (votes[keyIndex] > votes[index]) {
        index = keyIndex
      }
    }
    return index
  }

  const mostVotedQuoteIndex = getHigherVotedQuoteIndex(votes)

  return (
    <>
      <h1>Anecdote of the Day</h1>
      <div>{anecdotes[selected]}</div>
      <p>This anecdote has: {votes[selected]} points</p>
      <button
        onClick={() => {
          const votesCopy = { ...votes }
          votesCopy[selected] += 1
          setVotes(votesCopy)
        }}
      >
        Vote
      </button>
      <button onClick={() => setSelected(randomIndexOf(anecdotes))}>
        Next Anecdote
      </button>
      <h2>Anecdote with most votes:</h2>
      <p>{anecdotes[mostVotedQuoteIndex]}</p>
      <p>
        Is the highest voted anecdote with {votes[mostVotedQuoteIndex]} votes
      </p>
    </>
  )
}

// It returns a random index of the given array
const randomIndexOf = (arr) => {
  const higherLimit = arr.length - 1
  const lowerLimit = 0

  return Math.floor(Math.random() * (higherLimit - lowerLimit + 1)) + lowerLimit
}

const createVotesFor = (arr) => {
  const votes = {}
  arr.forEach((el, i) => {
    votes[i] = 0
  })
  return votes
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))
