import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  let average = 0
  let positive = 0

  if (good !== 0 || bad !== 0) {
    positive = good / all
    average = (good - bad) / all
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <div>
        <h1>Statistics</h1>
        <p>
          Good: <span>{good}</span>
        </p>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
        <p>
          Bad: <span>{bad}</span>
        </p>
        <p>
          All: <span>{all}</span>
        </p>
        <p>
          Average: <span>{average}</span>
        </p>
        <p>
          Positive: <span>{positive * 100} %</span>
        </p>
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
