import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({text, value}) => (
  <>
    {text} {value}
  </>
)

const Statistics = (props) => {
  const {good, neutral, bad, total, avg, posi} = props
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text='good'/></td>
            <td><StatisticLine value={good}/></td>
          </tr>
          <tr>
            <td><StatisticLine text='neutral'/></td>
            <td><StatisticLine value={neutral}/></td>
          </tr>
          <tr>
            <td><StatisticLine text='bad'/></td>
            <td><StatisticLine value={bad}/></td>
          </tr>
          <tr>
            <td><StatisticLine text='all'/></td>
            <td><StatisticLine value={total}/></td>
          </tr>
          <tr>
            <td><StatisticLine text='average'/></td>
            <td><StatisticLine value={avg}/></td>
          </tr>
          <tr>
            <td><StatisticLine text='positive'/></td>
            <td><StatisticLine value={posi + '%'}/></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // function to handle click for good button
  const setGoodValue = (newValue) => {
    console.log('good now', newValue)
    setGood(newValue)
  }

  // function to handle click for neutral button
  const setNeutralValue = (newValue) => {
    console.log('neutral now', newValue)
    setNeutral(newValue)
  }

  // function to handle click for bad button
  const setBadValue = (newValue) => {
    console.log('bad now', newValue)
    setBad(newValue)
  }

  // total, avg, and positive % statistics
  let total = good + neutral + bad
  let avg = ((good * 1) + (neutral * 0) + (bad * -1)) / total // (good - bad) / total <-- simplified
  let posi = (good / total) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGoodValue(good + 1)} text='good' />
      <Button handleClick={() => setNeutralValue(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBadValue(bad + 1)} text='bad' />
      <h1>statistics</h1>
      {
        (total !== 0) ? 
        (<>
          <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total}
          avg={avg}
          posi={posi}
          />
        </>) : 
        (
          <p>No feedback given</p>
        )
      }
      
    </div>
  )
}

export default App