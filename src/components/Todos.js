import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { generateId } from '../helper/generateId'
import { addTodo, removeTodo, toggleTodo } from '../actions/todo'

import List from './List'

const Todos = ({ todos }) => {

  const [ todo, setTodo ] = useState('')

  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault()
    dispatch(addTodo({
      id: generateId(),
      todo,
      complete: false
    }))
    setTodo('')
  }

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id))
  }

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id))
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