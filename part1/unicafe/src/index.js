import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  const { handleOnClick, text } = props

  return <button onClick={handleOnClick}>{text}</button>
}

const Statistic = (props) => {
  const { data, text } = props
  return (
    <tr>
      <td>{text}</td>
      <td>{data}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, bad, neutral } = props

  const all = good + neutral + bad
  let average = 0
  let positive = 0

  if (good !== 0 || bad !== 0) {
    positive = (good / all) * 100 + ' %'
    average = (good - bad) / all
  }

  return (
    <table>
      <tbody>
        <Statistic data={good} text={'Good: '} />
        <Statistic data={neutral} text={'Neutral: '} />
        <Statistic data={bad} text={'Bad: '} />
        <Statistic data={all} text={'All: '} />
        <Statistic data={average} text={'Average: '} />
        <Statistic data={positive} text={'Positive: '} />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleOnClick={() => setGood(good + 1)} text={'Good'} />
      <Button handleOnClick={() => setNeutral(neutral + 1)} text={'Neutral'} />
      <Button handleOnClick={() => setBad(bad + 1)} text={'Bad'} />
      <h2>Statistics</h2>
      <div>
        {good !== 0 || neutral !== 0 || bad !== 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
