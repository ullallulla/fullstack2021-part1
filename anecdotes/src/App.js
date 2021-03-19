import React, { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>

)

const Display = (props) => {

  return (
    <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[props.selected]} <br />
        has {props.votes[props.selected]} votes
    
    
    </div>

  )

}

const DisplayMaxVotes = (props) => {

  const maxIndex = props.votes.indexOf(Math.max(...props.votes))
  const maxValue= Math.max(...props.votes)

  if (maxValue !== 0) {
    return (
      <div>
        <h1>Anecdote with the most votes</h1>
        {props.anecdotes[maxIndex]}<br />
        has {props.votes[maxIndex]} votes
      </div>

    )
  }

  return (
    <div></div>
  )
  
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))


  const handleVotes = () => {

    const copy = [...votes]

    copy[selected] += 1

    setVotes(copy)
  }

  return (
    <div>
      <Display selected={selected} votes={votes} anecdotes={anecdotes} />

      <Button handleClick={handleVotes} text="vote" />

      <Button handleClick={() => setSelected(Math.floor(Math.random() * 6))} text="next anecdote" />

      <DisplayMaxVotes selected={selected} votes={votes} anecdotes={anecdotes} />


    </div>
  )
}

export default App;
