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