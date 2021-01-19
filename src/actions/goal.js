import {
  ADD_GOAL,
  REMOVE_GOAL
} from './types'

export const addGoal = (goal) => {
  return {
    type: ADD_GOAL,
    goal
  }
}

export const removeGoal = (id) => {
  return {
    type: REMOVE_GOAL,
    id
  }
}

export const handleDeleteGoal = (goal) => {
  return (dispatch) => {
    dispatch(removeGoal(goal.id))
    
    return window.API.deleteGoal(goal.id)
    .catch(() => addGoal(goal))
  }
}

export const handleAddGoal = (name, cb) => {
  return (dispatch) => {
    return window.API.saveGoal(name)
    .then((res) => {
      dispatch(addGoal(res))
      cb()
    })
    .catch(() => alert("There was an error. Try again."))
  }
}