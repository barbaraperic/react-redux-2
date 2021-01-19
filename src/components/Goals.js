import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// import { generateId } from '../helper/generateId'
import { addGoal, removeGoal } from '../actions/goal'

import List from './List'

const Goals = ({ goals }) => {
  const [ goal, setGoal ] = useState('')
  const dispatch = useDispatch()

  const handleGoalSubmit = (e) => {
    e.preventDefault()

    return window.API.saveGoal(goal)
    .then((res) => {
      dispatch(addGoal(res))
      setGoal('')
    })
    .catch(() => alert("There was an error. Try again."))
  }

  const handleRemoveGoal = (goal) => {
    dispatch(removeGoal(goal.id))
    
    return window.API.deleteGoal(goal.id)
    .catch(() => addGoal(goal))
  }

  return (
    <React.Fragment>
    <h2>Goal</h2>
    <form onSubmit={handleGoalSubmit}>
        <input 
          type="text" 
          placeholder="Add goal"
          onChange={(e) => setGoal(e.target.value)}
          value={goal}
        />
        <button type="submit">Submit goal</button>
      </form>
      <List 
        items={goals}
        remove={handleRemoveGoal}
      />
    </React.Fragment>
  )
}

export default Goals