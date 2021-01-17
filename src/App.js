import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Todos from './components/Todos'
import Goals from './components/Goals'
import Loading from './components/Loading'

import { receiveActionData } from './actions/fetchAPI'

function App() {

  const { todos, goals, loading } = useSelector(state => state)

  console.log(typeof todos)

  const dispatch = useDispatch()

  useEffect(() => {
    Promise.all([
      window.API.fetchTodos(),
      window.API.fetchGoals()
    ]).then(([ todos, goals ]) => {
      dispatch(receiveActionData(todos, goals))
    })
  })

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <Todos todos={todos} />
      <Goals goals={goals}/>
    </div>
  );
}

export default App;
