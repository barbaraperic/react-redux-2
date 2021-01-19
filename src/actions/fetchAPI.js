import { RECEIVE_DATA } from './types'

export const receiveActionData = (todos, goals) => {
  return {
    type: RECEIVE_DATA,
    todos, 
    goals
  }
}

export const handleInitialData = () => {
  return (dispatch) => {
    Promise.all([
      window.API.fetchTodos(),
      window.API.fetchGoals()
    ]).then(([ todos, goals ]) => {
      dispatch(receiveActionData(todos, goals))
    })
  }
}