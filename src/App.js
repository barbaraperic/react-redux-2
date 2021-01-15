import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addTodo } from './actions/todo'
import { addGoal } from './actions/goal'

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

  const handleGoalSubmit = (e) => {
    e.preventDefault()
    dispatch(addGoal({
      id: generateId(),
      goal
    }))
    setGoal('')
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
            <li key={item.id}>{item.todo}</li>
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
            <li key={item.id}>{item.goal}</li>
          ))}
        </ul>
      </div>

    </React.Fragment>
  );
}

export default App;
