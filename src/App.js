import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addTodo, removeTodo } from './actions/todo'
import { addGoal, removeGoal } from './actions/goal'

const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function App() {
  const [ todo, setTodo ] = useState('')
  const [ goal, setGoal ] = useState('')

  const dispatch = useDispatch()
  const todoItems = useSelector(state => state.todos)
  const goalItems = useSelector(state => state.goals)

  const handleTodoSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo({
      id: generateId(),
      todo
    }))
    setTodo('')
  }

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id))
  }

  const handleGoalSubmit = (e) => {
    e.preventDefault()
    dispatch(addGoal({
      id: generateId(),
      goal
    }))
    setGoal('')
  }

  const handleRemoveGoal = (id) => {
    dispatch(removeGoal(id))
  }

  return (
    <React.Fragment>
      <div>
        <h2>Todo</h2>
        <form onSubmit={handleTodoSubmit}>
          <input 
            type="text" 
            placeholder="Add todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit">Submit todo</button>
        </form>
        <ul>
          {todoItems.map(item => (
            <div style={{ display: 'flex' }} key={item.id}>
              <li >{item.todo}</li>
              <button onClick={() => handleRemoveTodo(item.id)}>X</button>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <h2>Goal</h2>
        <form onSubmit={handleGoalSubmit}>
          <input 
            type="text" 
            placeholder="Add goal"
            onChange={(e) => setGoal(e.target.value)}
            value={goal}
          />
          <button type="submit">Submit goal</button>
        </form>
        <ul>
          {goalItems.map(item => (
            <div style={{ display: 'flex'}} key={item.id}>
              <li >{item.goal}</li>
              <button onClick={() => handleRemoveGoal(item.id)}>X</button>
            </div>
          ))}
        </ul>
      </div>

    </React.Fragment>
  );
}

export default App;
