import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// import { generateId } from '../helper/generateId'
import { handleAddTodo, handleDeleteTodo, handleToggleTodo } from '../actions/todo'

import List from './List'

const Todos = ({ todos }) => {
  const [ todo, setTodo ] = useState('')
  const dispatch = useDispatch()

  const addTodo = (e) => {
    e.preventDefault()

    dispatch(handleAddTodo(todo, () => setTodo('')))
  }

  const removeTodo = (todo) => {
    dispatch(handleDeleteTodo(todo))
  }

  const toggleTodo = (id) => {
    dispatch(handleToggleTodo(id))
  }

  return (
    <React.Fragment>
      <h2>Todo</h2>
      <form onSubmit={addTodo}>
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
        remove={removeTodo}
        toggle={toggleTodo}
      />
    </React.Fragment>
  )
}

export default Todos