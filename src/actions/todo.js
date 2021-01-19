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

export const handleAddTodo = (name, cb) => {
  return (dispatch) => {
    return window.API.saveTodo(name)
    .then((res) => {
      dispatch(addTodo(res))
      cb()
    })
    .catch(() => alert("There was an error. Try again."))
  }
}

export const handleToggleTodo = (id) => {
  return (dispatch) => {
    dispatch(toggleTodo(id))

    return window.API.saveTodoToggle(id)
    .catch(() => {
      dispatch(toggleTodo(id))
      alert('An error occurred. Try again.')
    })
  }
}
