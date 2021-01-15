import { combineReducers } from 'redux'
import { todos } from './todo'
import { goals } from './goal'

export default combineReducers({
  todos,
  goals
})
