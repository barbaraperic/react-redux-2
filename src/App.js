import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addTodo } from './actions/todo'


const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function App() {
  const [ todo, setTodo ] = useState('')
  const dispatch = useDispatch()
  const item = useSelector(state => state)

  // console.log('todo', todo)
  console.log('item', item)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('e', e)
    dispatch(addTodo({
      id: generateId(),
      todo
    }))
  }

  return (
    <React.Fragment>
      <div>
        <h2>Todo</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Add todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button 
            type="submit"
            >
              Submit todo
          </button>
        </form>
      </div>
      <div>
        <h2>Goal</h2>
        <input type="text" placeholder="Add goal"/>
        <button type="submit">Submit goal</button>
      </div>

    </React.Fragment>
  );
}

export default App;
