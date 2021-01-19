import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// import { generateId } from '../helper/generateId'
import { addTodo, removeTodo, toggleTodo } from '../actions/todo'

import List from './List'

const Todos = ({ todos }) => {
  const [ todo, setTodo ] = useState('')
  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault()

    return window.API.saveTodo(todo)
    .then((res) => {
      dispatch(addTodo(res))
      setTodo('')
    })
    .catch(() => alert("There was an error. Try again."))
  }

  const handleRemoveTodo = (todo) => {
    dispatch(removeTodo(todo.id))

    return window.API.deleteTodo(todo.id)
      .catch(() => addTodo(todo))
  }

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))

    return window.API.saveTodoToggle(id)
    .catch(() => {
      dispatch(toggleTodo(id))
      alert('An error occurred. Try again.')
    })
  }

  return (
    <React.Fragment>
      <h2>Todo</h2>
      <form onSubmit={handleAddTodo}>
        <input
          type="text" 
          placeholder="Add todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Submit todo</button>
      </form>
      <List 
        items={todos}
        remove={handleRemoveTodo}
        toggle={handleToggleTodo}
      />
    </React.Fragment>
  )
}

export default Todos