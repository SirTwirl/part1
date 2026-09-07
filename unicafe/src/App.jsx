import {useState} from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
    {props.text}
    </button>
  )
}

const Statistic = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
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
      <h1>statistic</h1>
      <Statistic text='good' value={good}/>
      <Statistic text='neutral' value={neutral}/>
      <Statistic text='bad' value={bad}/>
    </div>
  )
}

export default App