import {useState} from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
    {props.text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodButton = () => {

  }
  const handleNeutralButton = () => {
    
  }
  const handleBadButton = () => {
    
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodButton} text='good'/>
      <Button onClick={handleNeutralButton} text='neutral'/>
      <Button onClick={handleBadButton} text='bad'/>
      <h1>statistic</h1>
    </div>
  )
}

export default App