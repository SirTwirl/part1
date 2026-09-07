import {useState} from 'react'

const StatisticLine = (props) => {
  return (
      <tr><td>{props.text} {props.value}</td></tr>
  )
}

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
      <table>
        <tbody>
          <StatisticLine text='good' value={props.good}/>
          <StatisticLine text='neutral' value={props.neutral}/>
          <StatisticLine text='bad' value={props.bad}/>
          <StatisticLine text='all' value={total}/>
          <StatisticLine text='average' value={average}/>
          <StatisticLine text='positive' value={positive + '%'}/>
        </tbody>
      </table>
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