import React, { useState } from 'react';




const Display = props => (
  <h1>give feedback</h1>
)


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>

)

const Statistics = (props) => {


  if (props.valueGood + props.valueNeutral + props.valueBad === 0) {
    return (
      <div>
        <h1>
          statistics
        </h1>
        <p>
          No feedback given
        </p>

      </div>
    )

  }

  return (

    <div>

      <h1>statistics</h1>
     
      <table>
        <tbody>
          <Statistic text="good" value={props.valueGood} />
          <Statistic text="neutral" value={props.valueNeutral} />
          <Statistic text="bad" value={props.valueBad} />
          <Statistic text="all" value={props.valueGood + props.valueNeutral + props.valueBad} />
          <Statistic text="average" value={((props.valueGood * 1) + (props.valueNeutral * 0) + (props.valueBad * (-1))) / (props.valueGood + props.valueNeutral + props.valueBad)} />
          <Statistic text="positive" value={(props.valueGood / (props.valueGood + props.valueNeutral + props.valueBad)) * 100} />
        </tbody>
      </table>
    </div>

  )
}


const Statistic = (props) => {
  if (props.text === 'positive') {
    return (

      <tr>
        <td>{props.text}</td>
        <td>{props.value} %</td>
      </tr>

    )
  }
  return (

    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>

  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Statistics valueGood={good} valueNeutral={neutral} valueBad={bad} all={good + neutral + bad} />


    </div>
  )
}

export default App;
