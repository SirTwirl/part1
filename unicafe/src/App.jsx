import {useState} from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
    {props.text} 
    </button>
  )
}

const Statistic = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = total === 0 ? 0 : (props.good * 1 + props.bad * -1) / total
  const positive = total === 0 ? 0 : (props.good / total) * 100
  if(total === 0) {
    return <><h1>statistics</h1> <p>No feedback given</p></>
  }
  else {
    return (
    <>
      <h1>statistics</h1>
      <p> good {props.good}</p>
      <p> neutral {props.neutral}</p>
      <p> bad {props.bad}</p>
      <p> all {total}</p>
      <p> average {average}</p>
      <p> positive {positive}%</p>
    </>
  )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodButton = () => {
    setGood(good + 1)
  }
  const handleNeutralButton = () => {
    setNeutral(neutral + 1)
  }
  const handleBadButton = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodButton} text='good'/>
      <Button onClick={handleNeutralButton} text='neutral'/>
      <Button onClick={handleBadButton} text='bad'/>
      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App