import {
  ADD_GOAL,
  REMOVE_GOAL,
  RECEIVE_DATA
} from '../actions/types'
 
export const goals = (state = [], action) => {
  switch(action.type) {
    case ADD_GOAL :
      return state.concat([action.goal])
    case REMOVE_GOAL :
      return state.filter(todo => todo.id !== action.id)
    case RECEIVE_DATA :
      return action.goals
    default:
      return state
  }
}