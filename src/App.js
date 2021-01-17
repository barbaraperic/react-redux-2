import React from 'react'
import { useSelector } from 'react-redux'

import Todos from './components/Todos'
import Goals from './components/Goals'

function App() {

  const todos = useSelector(state => state.todos)
  const goals= useSelector(state => state.goals)

  return (
    <div>
      <Todos todos={todos} />
      <Goals goals={goals}/>
    </div>
  );
}

export default App;
