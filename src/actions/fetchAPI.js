import { RECEIVE_DATA } from './types'

export const receiveActionData = (todos, goals) => {
  return {
    type: RECEIVE_DATA,
    todos, 
    goals
  }
}