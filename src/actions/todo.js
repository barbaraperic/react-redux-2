// function that creates action object

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from './types'

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const handleDeleteTodo = (todo) => {
  return (dispatch) => {
    dispatch(removeTodo(todo.id))

    return window.API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodo(todo))
        alert("There was an error. Try again")
      })
  }
}
