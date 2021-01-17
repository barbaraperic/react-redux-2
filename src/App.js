import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Todos from './components/Todos'
import Goals from './components/Goals'

import { receiveActionData } from './actions/fetchAPI'

function App() {

  const todos = useSelector(state => state.todos)
  const goals= useSelector(state => state.goals)

  const dispatch = useDispatch()

  useEffect(() => {
    Promise.all([
      window.API.fetchTodos(),
      window.API.fetchGoals()
    ]).then(([ todos, goals ]) => {
      dispatch(receiveActionData(todos, goals))
    })
  })

  return (
    <div>
      <Todos todos={todos} />
      <Goals goals={goals}/>
    </div>
  );
}

export default App;
